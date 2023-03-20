import { ChangeEvent, useState, useContext } from 'react'
import QRCode from 'react-qr-code';
import { ContainerContent, ContainerContentQrCode, ContainerQrcode, 
DowloadQrcode, Input, SubTitle, TextTitle, Title } from './style';
import QrcodeLink from 'qrcode'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';

interface TogleThemeProps {
  toggleTheme: () => void
}


export function Home( { toggleTheme }: TogleThemeProps) {

  const [link, setLink] = useState('')
  const [qrCodeLink, setQrcodeLink] = useState('')

  const { colors, title } = useContext(ThemeContext)

  const handleGenerateQrcodeDownload = (Link_Url: string)  => {
    QrcodeLink.toDataURL(Link_Url, {
      width: 600,
      margin: 3,
    }, function (err, url){
      setQrcodeLink(url)
    })

   }

  const handleNewQRcode = (event: ChangeEvent<HTMLInputElement>) => {
   const newLink =  event.target.value

   setLink(newLink)
   handleGenerateQrcodeDownload(newLink)
 
  }

  const deleteLinkInput = () => {
    setLink('')
  }


  return (
    <ContainerContent>
      <header>
      <Switch 
         onChange={toggleTheme}
         checked={title === 'light'}
         checkedIcon={false}
         uncheckedIcon={false}
         offColor={ colors['background-page']}
         onColor={ colors['text-color']}
      />
      </header>
     <ContainerQrcode>
      <QRCode value={link}/>
      <ContainerContentQrCode>
        <TextTitle>Gerador QrCode</TextTitle>
        <Title>Digite o seu Link</Title>
        <SubTitle>e Baixe seu QrCode</SubTitle>
        <Input type="text" placeholder="Digite Seu Link" value={link} onChange={ handleNewQRcode}/>
        <DowloadQrcode  onClick={deleteLinkInput} href={qrCodeLink} download={'QrCode.png'} > 
          Baixar QrCode
        </DowloadQrcode>
      </ContainerContentQrCode>
      </ContainerQrcode>
    </ContainerContent>
  )
}


