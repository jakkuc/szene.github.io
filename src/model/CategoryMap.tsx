//Selected Category Ids: 8, 54, 82, 120, 40, 47, 51
//[].slice.call(document.getElementsByName('categoryIds[]')).map((f,i) => {return "{ id:"+i + ", categorytext: '"+ f.labels[0].innerText.replace(/\n/,'').replace(/\[.*\]/,'')+"' , code : '"+ f.value +"'},";}).join('\n');
export const categoryMap = [
    { id:0, categorytext: 'AUSSTELLUNGEN' , code : '115'},
    { id:1, categorytext: 'DAUERAUSSTELLUNGEN' , code : '114'},
    { id:2, categorytext: 'FÜHRUNGEN' , code : '116'},
    { id:3, categorytext: 'WEITERE AUSSTELLUNGEN' , code : '117'},
    { id:4, categorytext: 'WEITERBILDUNGEN' , code : '90'},
    { id:5, categorytext: 'WEITERE BILDUNGSANGEBOTE' , code : '91'},
    { id:6, categorytext: 'Comedy' , code : '10'},
    { id:7, categorytext: 'Lesungen' , code : '8'},
    { id:8, categorytext: 'Theater' , code : '3'},
    { id:9, categorytext: 'Begegnungsangebote' , code : '131'},
    { id:10, categorytext: 'Exkursionen & Wanderungen' , code : '92'},
    { id:11, categorytext: 'Festivals' , code : '13'},
    { id:12, categorytext: 'Jahrmärkte' , code : '15'},
    { id:13, categorytext: 'Weitere Festivals & Feste' , code : '17'},
    { id:14, categorytext: 'Klassik' , code : '82'},
    { id:15, categorytext: 'Pop' , code : '55'},
    { id:16, categorytext: 'Singer/Songwriter' , code : '120'},
    { id:17, categorytext: 'Weitere Konzerte' , code : '25'},
    { id:18, categorytext: 'Weitere Messen' , code : '125'},
    { id:19, categorytext: 'Musicals' , code : '29'},
    { id:20, categorytext: 'Shows & Varieté' , code : '30'},
    { id:21, categorytext: 'Zirkus' , code : '31'},
    { id:22, categorytext: 'Weitere Musicals & Shows' , code : '32'},
    { id:23, categorytext: 'Wochenmärkte' , code : '57'},
    { id:24, categorytext: 'Religion & Spiritualität' , code : '40'},
    { id:25, categorytext: 'Ausflugsfahrten' , code : '43'},
    { id:26, categorytext: 'Bootstouren' , code : '45'},
    { id:27, categorytext: 'Hafenrundfahrten' , code : '44'},
    { id:28, categorytext: 'Stadtrundfahrten' , code : '42'},
    { id:29, categorytext: 'Stadtrundgänge & Führungen' , code : '49'},
    { id:30, categorytext: 'Weitere Rundgänge & Fahrten' , code : '46'},
    { id:31, categorytext: 'Seminare, Kurse & Workshops' , code : '47'},
    { id:32, categorytext: 'Radtouren' , code : '36'},
    { id:33, categorytext: 'Vorträge & Diskussionsrunden' , code : '51'},
    { id:34, categorytext: 'Sonstige' , code : '52'},
];
