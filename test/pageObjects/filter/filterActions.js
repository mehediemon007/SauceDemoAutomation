import filterObjects from "./filterObjects";

class FilterActions{

     async sortProduct(way){
          const selectBox = await filterObjects.filter;
          await selectBox.selectByAttribute('value', way);
     }

     async filterProduct(way){
          await this.sortProduct(way);
          await browser.pause(1000);
     }
}

export default new FilterActions();