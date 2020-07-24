HTMLElement.prototype.list = function () {
    Object.assign(this, {
        defaultItemHTML: '',
        listItem: [],

        add: (...args) => {
            const item = document.createElement('div');
            item.innerHTML = this.defaultHTML.replace(/%\d+/g, q => args[q.slice(1)]);
            this.listItem.push(item);
            this.appendChild(item);
        },

        get: index => listItem[index],
        
        remove: index => {
            listItem[index].remove();
            listItem.splice(index, 1);
        }
    });
}