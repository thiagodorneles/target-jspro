export default class Header {
  showAccount () {
    window.alert('meus dados da conta')
  }

  render () {
    const header = document.createElement('header')

    const h1 = document.createElement('h1')
    h1.innerText = 'TargetFlix'
    header.appendChild(h1)

    const div = document.createElement('div')
    div.className = 'right'

    const linkGender = document.createElement('a')
    linkGender.href = '#'
    linkGender.innerText = 'Gêneros'
    div.appendChild(linkGender)

    const linkProfile = document.createElement('a')
    linkProfile.href = '#'
    linkProfile.innerText = 'Perfis'
    div.appendChild(linkProfile)

    const linkAccount = document.createElement('a')
    linkAccount.href = '#'
    linkAccount.innerText = 'Conta'
    linkAccount.onclick = this.showAccount
    div.appendChild(linkAccount)

    header.appendChild(div)

    return header
  }
}
