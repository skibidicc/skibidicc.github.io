function handleSubmit(event) {
    event.preventDefault();

    const input = document.getElementById('user-input').value.trim();
    if (input === '') {
        addLog('Input is empty.', 'Error');
        return;
    }

    const url = `https://cysaw.top/uploads/${input}.zip`;
    addLog(`Attempting Download On GameId: ${input}`, 'Information');

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;

    // Remove iframe after 5 seconds
    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 5000);

    document.body.appendChild(iframe);
}

function addLog(message, type) {
    const logContainer = document.getElementById('log-container');
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    
    let color;
    switch (type) {
        case 'Information':
            color = '#00bfff';
            break;
        case 'Error':
            color = '#ff4c4c';
            break;
        case 'Warning':
            color = '#ffcc00';
            break;
        default:
            color = '#ffffff';
    }

    logEntry.innerHTML = `<span style="color: ${color}">[ ${type} ]</span> ${message}`;
    logContainer.insertBefore(logEntry, logContainer.firstChild);
    logContainer.scrollTop = 0;
}

document.getElementById('SubmitButton').addEventListener('click', handleSubmit);

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.custom-button');
    button.disabled = true;

    setTimeout(() => {
        button.disabled = false;
        addLog("Awaiting Input", "Information");
    }, 1800);
});