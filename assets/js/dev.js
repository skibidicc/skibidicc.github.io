document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = `https://raw.githubusercontent.com/skibidicc/devlog.json/refs/heads/main/devlog.json`;

    fetch(apiUrl)
        .then(response => response.json()) 
        .then(data => {
            const addedItems = (data.added || [])
                .filter(item => item.trim() !== '')
                .map(item => `<span class="added devlogtext">${item.trim()}</span>`)
                .join('<br>'); 
            document.getElementById('added-info').innerHTML = addedItems;

            const removedItems = (data.removed || [])
                .filter(item => item.trim() !== '')
                .map(item => `<span class="removed devlogtext">${item.trim()}</span>`)
                .join('<br>');
            document.getElementById('removed-info').innerHTML = removedItems;

            const removed = (data.removed || [])
                .filter(item => item.trim() !== '')
                .map(item => `<span class="removed devlogtext">${item.trim()}</span>`)
                .join('<br>');
            document.getElementById('removed').innerHTML = removed;

            const added = (data.removed || [])
                .filter(item => item.trim() !== '')
                .map(item => `<span class="removed devlogtext">${item.trim()}</span>`)
                .join('<br>');
            document.getElementById('added').innerHTML = added;


            const reaction = (data.removed || [])
                .filter(item => item.trim() !== '')
                .map(item => `<span class="removed devlogtext">${item.trim()}</span>`)
                .join('<br>');
            document.getElementById('reaction').innerHTML = reaction;

            const citations = (data.removed || [])
                .filter(item => item.trim() !== '')
                .map(item => `<span class="removed devlogtext">${item.trim()}</span>`)
                .join('<br>');
            document.getElementById('citations').innerHTML = citations;
          
        })
        .catch(error => console.error('Error fetching data:', error));
});
