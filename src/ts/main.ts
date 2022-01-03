{
  const testScript = () => {
    const insertElement:HTMLElement | null = document.querySelector('[data-test]');
    if (insertElement === null) return;
    insertElement.textContent = 'このメッセージはscriptから動的に追加されています'
  }
  testScript();
}