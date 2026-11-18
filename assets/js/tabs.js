class Tabs {
    constructor(tabsContainer) {
        this.tabs = [...tabsContainer.querySelectorAll('div.tabs .tabs-links')];
        this.tabsContent = [...tabsContainer.querySelectorAll('div.tabs-content')];
        const tabList = tabsContainer.querySelector('.tabs');

        if (!this.tabs.length || this.tabs.length !== this.tabsContent.length) {
            return;
        }

        tabList?.setAttribute('role', 'tablist');

        this.tabs.forEach((tab, index) => {
            const panel = this.tabsContent[index];
            tab.setAttribute('role', 'tab');
            tab.setAttribute('aria-controls', panel.id);
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('aria-labelledby', tab.id);

            tab.addEventListener('click', () => this.showTab(index));
            tab.addEventListener('keydown', (event) => {
                let target = index;
                if (event.key === 'ArrowRight') target = (index + 1) % this.tabs.length;
                else if (event.key === 'ArrowLeft') target = (index - 1 + this.tabs.length) % this.tabs.length;
                else if (event.key === 'Home') target = 0;
                else if (event.key === 'End') target = this.tabs.length - 1;
                else if (event.key !== 'Enter' && event.key !== ' ') return;

                event.preventDefault();
                this.showTab(target);
                this.tabs[target].focus();
            });
        });

        this.showTab(0);
    }

    showTab(index) {
        if (!this.tabs[index] || !this.tabsContent[index]) return;

        this.tabs.forEach((tab, i) => {
            const selected = i === index;
            tab.classList.toggle('active', selected);
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
            this.tabsContent[i].classList.toggle('displayNone', !selected);
            this.tabsContent[i].hidden = !selected;
        });
    }
}
