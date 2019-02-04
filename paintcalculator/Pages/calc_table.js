var calc_table = function(){

    this.inputcell = element(by.xpath("//input[@name='rooms']"));
    this.submitBtn = element(by.xpath("//input[@type='submit']"));
    
}

module.exports = new calc_table();