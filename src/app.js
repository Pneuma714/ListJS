HTMLElement.prototype.list = function () {
    Object.assign(this, {
        defaultItemHTML: '',
        listItem: [],

        add: (props, ...args) => {
            const item = document.createElement('div');
            Object.assign(item, props);
            
            item.innerHTML = this.defaultItemHTML.replace(/%\d+/g, q => args[q.slice(1)]);
            this.listItem.push(item);
            this.appendChild(item);
        },

        get: index => this.listItem[index],

        remove: index => {
            this.listItem[index].remove();
            this.listItem.splice(index, 1);
        }
    });
}