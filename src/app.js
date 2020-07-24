HTMLElement.prototype.list = function (defaultItemHTML, seperatorHTML) {
    Object.assign(this, {
        defaultItemHTML: defaultItemHTML || '',
        listItem: [],
        seperatorHTML: seperatorHTML || '',

        addItem(props, ...args) {
            if (this.listItem.length !== 1) this.innerHTML += this.seperatorHTML;

            const item = document.createElement('div');
            Object.assign(item, props);
            
            item.innerHTML = this.defaultItemHTML.replace(/%\d+/g, q => args[q.slice(1)]);
            this.listItem.push(item);
            this.appendChild(item);
        },
        
        getItem(index) { return this.listItem[index] },

        removeItem(index) {
            this.listItem[index].remove();
            this.listItem.splice(index, 1);
        },

        setDefaultItem(html = '%0') {
            this.defaultItemHTML = html;
        },

        setSeperator(html = '<hr>') {
            this.seperatorHTML = html;
        }
    });
}