// function ClozeCard (text, cloze) {
//
//   if(text.indexOf(cloze) != -1){
//     var x = text.replace(cloze, '...');
//     this.text = text;
//     this.cloze = cloze;
//     this.fullText = text;
//     this.partial = x;
//
//   }else {
//     console.log("\""+ cloze+ "\"" + " doesn't appear in " + "\"" + text + "\"");
//   }
// }
// scop-safe Version
function ClozeCard(text, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze);
  }
  if(text.indexOf(cloze) != -1){
    var x = text.replace(cloze, '...');
    this.text = text;
    this.cloze = cloze;
    this.fullText = text;
    this.partial = x;

  }else {
    console.log("\""+ cloze+ "\"" + " doesn't appear in " + "\"" + text + "\"");
  }
}

module.exports = ClozeCard;
