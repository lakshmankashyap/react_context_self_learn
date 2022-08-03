export function getInitialItems(n) {
    return new Array(n)
      .fill(null)
      .map((_, i) => ({ text: i }));
  }
  
  export function log(text) {
    const container = document.getElementById('logs');
    container.innerHTML += text + '<br>';
  }
  