/*<![CDATA[*/
	/* Current Time */
	var current_channel;
	$(document).ready(function() {

		/* Channel Link Class */
		$('a.crcl-link').on('click', function(event) {
			$('a.crcl-link').removeClass('active');
			$(this).addClass('active');
			current_channel = $(this).attr('href');
			$('input#current_channel').val(current_channel);
			console.log(current_channel);
		});

		/* Channel List */
		$('#cr-broadcast-list .cr-boardcasts').click(function(event) {
			$(this).addClass('active').siblings('.cr-boardcasts').removeClass('active');
			if( $(this).next('.cr-channels').attr('style') == 'display: block;' ) {
				$(this).removeClass('active');
				$(this).next('.cr-channels').slideUp();
			} else {
				$(this).next('.cr-channels').slideDown().siblings('.cr-channels').slideUp();
			}
		});

	
	});
    const date = new Date().toUTCString();
  const extractedDateTime = date.slice(5, 16);
  document.getElementById("extractedDateTime").innerHTML = "Match Schedule: " + extractedDateTime;
const besok = () => {  // Dapatkan tanggal hari ini
  let hariIni = new Date();  // Tambahkan 1 ke tanggal (hari ini + 1 = besok)
  hariIni.setDate(hariIni.getDate() + 1);
  // Daftar nama bulan  const namaBulan = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",    "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
  ];
  // Format tanggal menjadi "dd MMM yyyy"  let dd = String(hariIni.getDate()).padStart(2, '0');
  let mm = namaBulan[hariIni.getMonth()];  let yyyy = hariIni.getFullYear();
  // Gabungkan format tanggal
  let tanggalBesok = dd + ' ' + mm + ' ' + yyyy;
  // Kembalikan hasil dalam format "dd MMM yyyy"  return tanggalBesok;
};
// Tampilkan hasil di dalam tag span pada widget besokdocument.querySelector(".tomorrow-date").innerHTML = besok();
//]]>
