window.dynamicScriptLoader = {
    loadDashboardScripts: () => {
        if (!document.getElementById("dashboard-chart-script")) {
            const script = document.createElement("script");
            script.src = "/js/apexchart.js";
            script.id = "dashboard-chart-script";
            script.async = true;
            document.body.appendChild(script);
        }
        if (!document.getElementById("dashboard-line-chart-script")) {
            const script = document.createElement("script");
            script.src = "/js/LineChart.js";
            script.id = "dashboard-line-chart-script";
            script.async = true;
            document.body.appendChild(script);
        }
    },
    removeDashboardScripts: () => {
        const script = document.getElementById("dashboard-chart-script");
        if (script) {
            script.remove();
        }
    }
};
