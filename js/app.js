new TinyPicker({
    firstBox:document.getElementById('startDate'),
    startDate: new Date,
    months: 2,
    days: ['Lu','Ma','Mi','Ju','Vi','Sa','Do'],
    local: 'ES',
    allowPast: true,
}).init();
new TinyPicker({
    firstBox:document.getElementById('startDate1'),
    startDate: new Date,
    endDate: new Date,
    lastBox: document.getElementById('endDate1'),
    months: 3,
    days: ['Lu','Ma','Mi','Ju','Vi','Sa','Do'],
    local: 'ES',
}).init();

