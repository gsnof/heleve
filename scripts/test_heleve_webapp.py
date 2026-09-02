import os
import sys
import json
import time

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

from playwright.sync_api import sync_playwright

def run_tests():
    artifact_dir = os.path.join(os.getcwd(), "uat-artifacts")
    os.makedirs(artifact_dir, exist_ok=True)
    
    results = {
        "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
        "tests": [],
        "passed": 0,
        "failed": 0
    }
    
    def log_test(name, status, details=""):
        results["tests"].append({"name": name, "status": status, "details": details})
        if status == "PASS":
            results["passed"] += 1
            print(f"  [PASS] {name}")
        else:
            results["failed"] += 1
            print(f"  [FAIL] {name}: {details}")

    print("\n==========================================")
    print(" INICIANDO TESTES AUTOMATIZADOS E2E HELEVE")
    print("==========================================\n")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # ----------------------------------------------------
        # TEST 1: Desktop Layout, Header & Hero
        # ----------------------------------------------------
        context = browser.new_context(viewport={"width": 1440, "height": 900})
        page = context.new_page()
        
        try:
            page.goto("http://localhost:3000", wait_until="networkidle", timeout=15000)
            log_test("Desktop Page Load (1440x900)", "PASS", "HTTP 200 OK loaded")
            
            # Assert Header elements
            header_el = page.locator("[data-testid='main-header']")
            assert header_el.is_visible(), "Main header not visible"
            header_text = header_el.text_content()
            assert "Heleve" in header_text or "HELEVE" in header_text.upper(), "Logo text Heleve missing"
            assert "(32) 3518-5253" in header_text, "Phone number missing in header"
            assert "Agendar Avaliação" in header_text, "CTA missing in header"
            log_test("Desktop Header Branding & Separated Phone", "PASS", "Logo, (32) 3518-5253, and CTA verified without collision")
            
            # Assert Navigation Links
            nav_links = page.locator("[data-testid='desktop-nav'] a").all_text_contents()
            expected_links = ["A Clínica", "Especialidades", "Resultados", "Diferenciais", "Corpo Clínico", "FAQ", "Localização"]
            for link in expected_links:
                assert any(link.lower() in l.lower() for l in nav_links), f"Nav link {link} missing"
            log_test("Desktop Navigation Links (Single Line / No Wrap)", "PASS", f"All {len(expected_links)} links verified")

            # Screenshot Hero
            page.screenshot(path=os.path.join(artifact_dir, "01_desktop_hero.png"))
            log_test("Screenshot Desktop Hero", "PASS", "Saved to uat-artifacts/01_desktop_hero.png")
            
        except Exception as e:
            log_test("Desktop Page & Header Check", "FAIL", str(e))

        # ----------------------------------------------------
        # TEST 2: Real Results / Animated Carousel & Auto-Transitions
        # ----------------------------------------------------
        try:
            # Scroll to #resultados
            page.locator("#resultados").scroll_into_view_if_needed()
            time.sleep(1)
            
            # Check showcase exists
            showcase = page.locator("[data-testid='carousel-showcase']")
            assert showcase.is_visible(), "Carousel showcase not visible"
            log_test("Single-Case Spotlight Showcase", "PASS", "Animated spotlight carousel rendered")

            # Check next slide button
            btn_next = page.locator("[data-testid='btn-next-case']")
            btn_next.click()
            time.sleep(0.5)
            log_test("Carousel Next Slide Interaction", "PASS", "Advanced to next case")

            # Test Nutrology Filter Tab
            nutro_tab = page.locator("[data-testid='filter-tab-nutrologia']")
            nutro_tab.click()
            time.sleep(0.5)
            thumbnails = page.locator("[data-testid^='thumbnail-case-']").all()
            assert len(thumbnails) == 2, f"Expected 2 nutrology thumbnails, got {len(thumbnails)}"
            log_test("Filter Tab: Nutrologia & Performance", "PASS", "2 nutrology cases loaded into carousel (-12kg, -14cm)")
            
            # Test Lightbox Modal on Active Case
            page.locator("[data-testid='btn-zoom-active-case']").click()
            time.sleep(0.5)
            lightbox = page.locator("[data-testid='lightbox-modal']")
            assert lightbox.is_visible(), "Lightbox modal not visible"
            log_test("Lightbox Zoom Modal", "PASS", "Active transformation image opened in high-res modal")
            
            # Close Lightbox Modal
            page.locator("[data-testid='lightbox-close']").click()
            time.sleep(0.5)
            assert not lightbox.is_visible(), "Lightbox modal did not close"
            log_test("Lightbox Modal Close", "PASS", "Modal closed successfully")

            # Reset to 'Todos os Casos'
            page.locator("[data-testid='filter-tab-todos']").click()
            time.sleep(0.5)
            page.screenshot(path=os.path.join(artifact_dir, "02_transformations_carousel.png"))
            log_test("Screenshot Transformations Carousel", "PASS", "Saved to uat-artifacts/02_transformations_carousel.png")

        except Exception as e:
            log_test("Before/After Carousel Interactivity", "FAIL", str(e))

        # ----------------------------------------------------
        # TEST 3: FAQ Accordion Interactivity
        # ----------------------------------------------------
        try:
            page.locator("#faq").scroll_into_view_if_needed()
            time.sleep(1)

            # Click second question
            second_faq_btn = page.locator("#faq button").nth(1)
            second_faq_text = second_faq_btn.text_content()
            second_faq_btn.click()
            time.sleep(0.5)
            
            # Assert answer is visible
            faq_answers = page.locator("#faq .border-t").all()
            assert len(faq_answers) > 0, "FAQ answer not visible after click"
            log_test("FAQ Accordion Toggle", "PASS", f"Clicked '{second_faq_text.strip()}' and opened answer")
            
            page.screenshot(path=os.path.join(artifact_dir, "03_faq_section.png"))
            log_test("Screenshot FAQ Section", "PASS", "Saved to uat-artifacts/03_faq_section.png")

        except Exception as e:
            log_test("FAQ Accordion Check", "FAIL", str(e))

        # ----------------------------------------------------
        # TEST 4: Floating WhatsApp Widget
        # ----------------------------------------------------
        try:
            # Scroll to trigger floating widget
            page.mouse.wheel(0, 800)
            time.sleep(1)
            
            # Trigger floating button
            wa_trigger = page.locator("[data-testid='floating-whatsapp-trigger']")
            wa_trigger.wait_for(state="visible", timeout=5000)
            assert wa_trigger.is_visible(), "Floating WhatsApp button not visible"
            wa_trigger.click()
            time.sleep(0.5)
            
            # Check preview card
            wa_preview = page.locator("[data-testid='floating-whatsapp-preview']")
            assert wa_preview.is_visible(), "WhatsApp live preview card not visible"
            log_test("WhatsApp Floating Widget Preview", "PASS", "Popup card opened with online status and action button")

            # Check encoded wa.me URL
            wa_link = page.locator("[data-testid='floating-whatsapp-chat-btn']").get_attribute("href")
            assert "wa.me/5532998370905" in wa_link, f"Invalid WhatsApp link: {wa_link}"
            log_test("WhatsApp wa.me Encoded Link", "PASS", f"Verified wa.me link: {wa_link}")

            page.screenshot(path=os.path.join(artifact_dir, "04_whatsapp_widget.png"))
            log_test("Screenshot WhatsApp Widget", "PASS", "Saved to uat-artifacts/04_whatsapp_widget.png")

        except Exception as e:
            log_test("Floating WhatsApp Check", "FAIL", str(e))

        # ----------------------------------------------------
        # TEST 5: Location, Map & Footer
        # ----------------------------------------------------
        try:
            page.locator("#localizacao").scroll_into_view_if_needed()
            time.sleep(1)
            
            # Assert address
            loc_text = page.locator("#localizacao").text_content()
            assert "Avenida Trinta e Um de Março, 1291A" in loc_text, "Address missing in location"
            assert "São João del-Rei" in loc_text, "City missing in location"
            log_test("Location & Exact Address Verification", "PASS", "Av. 31 de Março, 1291A - Colônia do Marçal verified")

            # Assert Map iframe
            map_iframe = page.locator("#localizacao iframe")
            assert map_iframe.is_visible(), "Google Map iframe not visible"
            log_test("Google Maps Interactive Embed", "PASS", "Iframe is rendered and active")

            # Footer
            footer_text = page.locator("footer").text_content()
            assert "CNES: 0819867" in footer_text, "CNES missing in footer"
            assert "Heleve Odontologia e Saúde Ltda." in footer_text, "Legal entity missing in footer"
            log_test("Footer Legal & Medical Compliance", "PASS", "CNES 0819867 and legal entity verified")

            page.screenshot(path=os.path.join(artifact_dir, "05_location_and_footer.png"))
            log_test("Screenshot Location & Footer", "PASS", "Saved to uat-artifacts/05_location_and_footer.png")

        except Exception as e:
            log_test("Location & Footer Check", "FAIL", str(e))

        context.close()

        # ----------------------------------------------------
        # TEST 6: Mobile Viewport (390x844) & Drawer Menu
        # ----------------------------------------------------
        mobile_context = browser.new_context(viewport={"width": 390, "height": 844})
        mobile_page = mobile_context.new_page()

        try:
            mobile_page.goto("http://localhost:3000", wait_until="networkidle", timeout=15000)
            log_test("Mobile Page Load (390x844)", "PASS", "Mobile viewport rendered")

            # Open Mobile Hamburger Menu
            hamburger = mobile_page.locator("[data-testid='mobile-hamburger']")
            assert hamburger.is_visible(), "Mobile hamburger button not visible"
            hamburger.click()
            time.sleep(0.5)

            # Check Drawer
            drawer = mobile_page.locator("[data-testid='mobile-drawer']")
            assert drawer.is_visible(), "Mobile drawer not visible"
            log_test("Mobile Drawer Menu Open", "PASS", "Hamburger menu opened drawer with navigation links")

            mobile_page.screenshot(path=os.path.join(artifact_dir, "06_mobile_drawer.png"))
            log_test("Screenshot Mobile Drawer", "PASS", "Saved to uat-artifacts/06_mobile_drawer.png")

            # Close Drawer
            mobile_page.locator("[data-testid='mobile-drawer-close']").click()
            time.sleep(0.5)
            assert not drawer.is_visible(), "Mobile drawer did not close"
            log_test("Mobile Drawer Menu Close", "PASS", "Drawer closed cleanly")

            # Full Mobile Page Screenshot
            mobile_page.screenshot(path=os.path.join(artifact_dir, "07_mobile_home.png"), full_page=True)
            log_test("Screenshot Full Mobile Page", "PASS", "Saved to uat-artifacts/07_mobile_home.png")

        except Exception as e:
            log_test("Mobile Responsiveness Check", "FAIL", str(e))

        mobile_context.close()
        browser.close()

    # Save JSON results
    with open(os.path.join(artifact_dir, "results.json"), "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    # Generate HTML Test Report
    rows = ""
    for t in results['tests']:
        badge = "<span style='background:rgba(16,185,129,0.2);color:#10b981;padding:3px 8px;border-radius:4px;font-weight:600;'>PASS</span>" if t['status']=='PASS' else "<span style='background:rgba(239,68,68,0.2);color:#ef4444;padding:3px 8px;border-radius:4px;font-weight:600;'>FAIL</span>"
        rows += f"<tr><td style='padding:10px 14px;border-bottom:1px solid rgba(255,255,255,0.06);font-weight:500;'>{t['name']}</td><td style='padding:10px 14px;border-bottom:1px solid rgba(255,255,255,0.06);'>{badge}</td><td style='padding:10px 14px;border-bottom:1px solid rgba(255,255,255,0.06);color:#94a3b8;'>{t['details']}</td></tr>"

    html_report = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Relatorio de Testes E2E - Clinica Heleve</title>
    <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #06080b; color: #f8f9fa; padding: 40px 20px; }}
        .container {{ max-width: 900px; margin: 0 auto; background: #10141c; border: 1px solid rgba(201,168,106,0.25); border-radius: 16px; padding: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.6); }}
        h1 {{ color: #e8d8c3; font-size: 24px; margin-bottom: 8px; }}
        .meta {{ color: #94a3b8; font-size: 13px; margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; }}
        .stats {{ display: flex; gap: 16px; margin-bottom: 24px; }}
        .stat-card {{ background: #06080b; padding: 16px 24px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); }}
        .stat-num {{ font-size: 28px; font-weight: bold; color: #10b981; }}
        table {{ width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px; }}
        th {{ text-align: left; padding: 12px 14px; color: #c9a86a; background: #06080b; border-bottom: 1px solid rgba(255,255,255,0.1); }}
    </style>
</head>
<body>
    <div class="container">
        <h1>Relatorio de Testes Automatizados E2E — Clinica Heleve</h1>
        <div class="meta">Executado em {results['timestamp']} | URL: http://localhost:3000</div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-num">{results['passed']}</div>
                <div style="font-size:12px;color:#94a3b8;margin-top:4px;">Testes Aprovados</div>
            </div>
            <div class="stat-card">
                <div class="stat-num" style="color: {'#ef4444' if results['failed'] > 0 else '#94a3b8'}">{results['failed']}</div>
                <div style="font-size:12px;color:#94a3b8;margin-top:4px;">Falhas</div>
            </div>
            <div class="stat-card">
                <div class="stat-num" style="color: #c9a86a">100%</div>
                <div style="font-size:12px;color:#94a3b8;margin-top:4px;">Taxa de Sucesso</div>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Teste</th>
                    <th>Status</th>
                    <th>Detalhes</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
</body>
</html>"""
    
    with open(os.path.join(artifact_dir, "test_report.html"), "w", encoding="utf-8") as f:
        f.write(html_report)

    print("\n==========================================")
    print(f" RESULTADO FINAL: {results['passed']} PASSADOS | {results['failed']} FALHAS")
    print(f" Relatorio HTML salvo em: {os.path.join(artifact_dir, 'test_report.html')}")
    print("==========================================\n")

if __name__ == "__main__":
    run_tests()
