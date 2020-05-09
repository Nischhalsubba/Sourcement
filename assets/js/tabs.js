class Tabs{
    constructor(tabsContainer) {
        // this.tabs = tabsContainer.querySelectorAll('div.tabs .tabs-links');
        // this.tabsContent = tabsContainer.querySelectorAll('div.tabs-content');
        this.tabs = [].slice.call(tabsContainer.querySelectorAll('div.tabs .tabs-links'));
        this.tabsContent = [].slice.call(tabsContainer.querySelectorAll('div.tabs-content'));
        this.tabsContainerContainer = tabsContainer.querySelector('div.tabs-content-container')
        
        //by default hide all the tabs content
        this.hideAllTabs();

        //by default make first tab active
        this.showTab(0);
        
        this.tabs.forEach((tab,tabIndex) => {
            tab.addEventListener('click', te => {
                this.showTab(tabIndex);
            })
        });
    }

    showTab(index) {
        this.hideAllTabs();
        this.tabsContent[index].classList.remove("displayNone");
        this.tabsContent[index].style = 'transform:scale(1)';
        this.tabs[index].classList.add("active");
    }

    hideAllTabs() {
        this.tabs.forEach(tabC => {
            tabC.classList.remove('active');
        });

        let tabContentHeight = 0;
        
        this.tabsContent.forEach(tabC => {
            if (tabContentHeight < tabC.clientHeight)
                tabContentHeight = tabC.clientHeight;
            
            tabC.classList.add('displayNone');
            tabC.style = 'transform:scale(0)';
        });

        if(tabContentHeight>0)
            this.tabsContainerContainer.style = 'height:'+tabContentHeight + 'px';
    }
}