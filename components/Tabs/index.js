// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        let tabs = data.data;
        // console.log(tabs);
        // tabs.topics.forEach(tab => console.log(tab));
        tabs.topics.forEach(tab => tabsComponent(tab));
    })
    .catch(error => console.log(error.message));

function tabsComponent(tab){
    let tabsContainer = document.querySelector('.topics');

    let tabItem = document.createElement('div');
    tabItem.classList.add('tab');
    tabItem.textContent = tab;

    tabsContainer.appendChild(tabItem);

    tabItem.addEventListener('click', () => {
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        tabItem.classList.add('active-tab');
    });

    return tabsContainer;
}