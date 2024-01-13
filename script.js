/*<![CDATA[*/
 var current_channel; $(document).ready(function() {  /* Channel Link Class */
  $('a.crcl-link').on('click', function(event) {   $('a.crcl-link').removeClass('active');   $(this).addClass('active');   current_channel = $(this).attr('href');
   $('input#current_channel').val(current_channel);   console.log(current_channel);  });
  /* Channel List */ 
   $('#cr-broadcast-list .cr-boardcasts').click(function(event) {   $(this).addClass('active').siblings('.cr-boardcasts').removeClass('active');   if( $(this).next('.cr-channels').attr('style') == 'display: block;' ) {
    $(this).removeClass('active');    $(this).next('.cr-channels').slideUp();   } else {    $(this).next('.cr-channels').slideDown().siblings('.cr-channels').slideUp();
   }  }); 
 });  const date = new Date().toUTCString();
  const extractedDateTime = date.slice(5, 16);  document.getElementById("extractedDateTime").innerHTML = "Today Match Schedule: " + extractedDateTime;
    const besok = () => {  let hariIni = new Date();
  hariIni.setDate(hariIni.getDate() + 1);  const namaBulan = [    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des"  ];  let dd = String(hariIni.getDate()).padStart(2, '0');
  let mm = namaBulan[hariIni.getMonth()];  let yyyy = hariIni.getFullYear();  let tanggalBesok = dd + ' ' + mm + ' ' + yyyy;
  return tanggalBesok;};
document.querySelector(".tomorrow-date").innerHTML = besok();
//]]>
