import { test, expect } from '@playwright/test';

test.describe('Bible For You E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000'); // URL do aplicativo
    });

    test('should display the splash screen', async ({ page }) => {
        const splashScreen = page.locator('text=Bible For You');
        await expect(splashScreen).toBeVisible();
        await page.waitForTimeout(3000); // Espera 3 segundos para a transição
    });

    test('should navigate to home page after splash screen', async ({ page }) => {
        await page.waitForTimeout(3000); // Espera a tela splash desaparecer
        const homeTitle = page.locator('text=Home');
        await expect(homeTitle).toBeVisible();
    });

    test('should search for verses', async ({ page }) => {
        await page.fill('input[name="search"]', 'amor'); // Preenche a barra de pesquisa
        await page.click('button[type="submit"]'); // Clica no botão de pesquisa
        const verseCard = page.locator('.verse-card'); // Seleciona o card do versículo
        await expect(verseCard).toBeVisible(); // Verifica se o card do versículo está visível
    });

    test('should share a verse via WhatsApp', async ({ page }) => {
        await page.fill('input[name="search"]', 'amor');
        await page.click('button[type="submit"]');
        await page.click('.share-button'); // Clica no botão de compartilhamento
        const whatsappLink = page.locator('text=WhatsApp');
        await expect(whatsappLink).toBeVisible(); // Verifica se o link do WhatsApp está visível
    });

    test('should toggle between light and dark themes', async ({ page }) => {
        const themeToggle = page.locator('button.theme-toggle');
        await themeToggle.click(); // Alterna o tema
        const body = page.locator('body');
        await expect(body).toHaveClass(/dark-theme/); // Verifica se a classe do tema escuro foi aplicada
        await themeToggle.click(); // Alterna de volta para o tema claro
        await expect(body).not.toHaveClass(/dark-theme/); // Verifica se a classe do tema escuro foi removida
    });
});