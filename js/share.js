// Prefilled tweet for sharing BJBToken
(function () {
  const btn = document.getElementById('shareOnXBtn');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const text = [
      "🍔 BJBToken (BJB) — meme token on Base",
      "Buy: https://tinyurl.com/Uniswapv3Base",
      "Chart: https://tinyurl.com/DexScreener2",
      "Join: t.me/BJBTokenChat",
      "#BJB #Base"
    ].join("\n");
    const url = location.origin;
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(intent, "_blank", "noopener");
  });
})();
