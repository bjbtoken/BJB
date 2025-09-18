// BJBCoin site helpers
(function(){
  const ADDRESS = "0x63CF07827273B55FcE249eB59956101E0Bb6E7c5";

  async function copyAddress(){
    try{
      await navigator.clipboard.writeText(ADDRESS);
      const el = document.getElementById('codeAddress');
      if(el){
        const old = el.textContent;
        el.textContent = '✓ Copied';
        setTimeout(()=>{ el.textContent = old; }, 1200);
      }
    }catch(e){}
  }

  async function addToMetaMask(){
    if(!window.ethereum) { alert('Open this in a browser with MetaMask.'); return; }
    try{
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: { type: 'ERC20', options: { address: ADDRESS, symbol: 'BJB', decimals: 18, image: '/assets/bjb-icon-32.svg' } }
      });
    }catch(e){}
  }

  document.getElementById('btnCopy')?.addEventListener('click', copyAddress);
  document.getElementById('btnCopy2')?.addEventListener('click', copyAddress);
  document.getElementById('btnAddMM')?.addEventListener('click', addToMetaMask);
})();
