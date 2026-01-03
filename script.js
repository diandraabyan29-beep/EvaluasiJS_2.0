const btn = document.getElementById('daftar')
const hasil = document.getElementById('hasil')

btn.addEventListener('click', () => {
    const nama = document.getElementById('nama').value
    const umur = Number(document.getElementById('umur').value)
    const kelas = document.getElementById('kelas').value
    const komitmen = document.getElementById('komitmen').checked

    hasil.innerText = ''

    if (!nama) {
        hasil.innerText = 'Nama tidak boleh kosong'
        return
    }

    if (umur <= 0) {
        hasil.innerText = 'Umur tidak valid'
        return
    }

    if (!komitmen) {
        hasil.innerText = 'Harap setujui komitmen kelas'
        return
    }

    btn.disabled = true
    btn.innerText = 'Memproses...'

    setTimeout(() => {
        let status = ''
        let warna = ''

        if (umur >= 18) {
            status = 'DITERIMA'
            warna = 'green'
        } else if (umur >= 15) {
            status = 'CADANGAN'
            warna = 'orange'
        } else {
            status = 'DITOLAK'
            warna = 'red'
        }

        hasil.innerHTML = `
      Halo, ${nama}<br>
      Kelas: ${kelas}<br>
      <b style="color:${warna}">${status}</b>
    `

        btn.disabled = false
        btn.innerText = 'Daftar Kelas'
    }, 2000)
})
