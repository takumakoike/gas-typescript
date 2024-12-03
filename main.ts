
function samplefunc(){
    console.log("sampleコードだよ")
    const ss = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = ss.getActiveSheet();
    
    sheet.getRange("A1").setValue("hoge")
}