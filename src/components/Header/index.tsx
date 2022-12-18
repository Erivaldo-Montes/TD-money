import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        {/* Radix Dialog auxilia na manipulação de modal com mais flexibilidade e com acessibilidade */}
        <Dialog.Root>
          {/* trigger é gatilho que mostra o dialogo, que por padrão é um botão, então a propriedade asChild informa 
          que deve reaproveitar o butão que esta dentro da tag */}
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
