
document.getElementById("configForm").addEventListener("submit", function(e){
    e.preventDefault();

    const cpu = document.getElementById("cpu").value;
    const gpu = document.getElementById("gpu").value;
    const ram = parseInt(document.getElementById("ram").value);
    const wired = document.getElementById("wired").checked;
    const internet = document.getElementById("internet").value;

    let advice = "<h2>Recommended Tweaks:</h2><ul>";

    advice += `<li>CPU: PBO Enabled, CPPC & Preferred Cores ON, SMT Enabled</li>`;
    if(ram >= 16){
        advice += `<li>Memory: XMP/DOCP Enabled, FCLK 1:1 ratio</li>`;
    }
    if(gpu.toLowerCase().includes("nvidia")){
        advice += `<li>NVIDIA: Low Latency Mode Ultra, 1 Pre-Rendered Frame, Max Perf</li>`;
    } else if(gpu.toLowerCase().includes("rx") || gpu.toLowerCase().includes("amd")){
        advice += `<li>AMD: Anti-Lag + Boost ON, Chill/Boost OFF, Shader Cache Unlimited</li>`;
    }
    advice += `<li>Controller: ${wired ? "Wired mode + HIDUSBF" : "Use mouse if possible"}</li>`;
    advice += `<li>Network: MTU ${internet==="pppoe"?"1492":"1500"}, Ethernet preferred</li>`;
    advice += "</ul>";

    advice += `<p>Download your template ZIP and apply the above tweaks: <a href="download/BeTheJokeByJerry_OptimizerPack_v5_ELITE.zip" download>Download Pack</a></p>`;

    document.getElementById("result").innerHTML = advice;
});
