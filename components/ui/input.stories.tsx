import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../common/input'
import { Calendar, Mail, Lock, Search, User } from 'lucide-react'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isRequired: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
  },
}

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    isRequired: true,
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Senha',
    placeholder: 'Digite sua senha',
    type: 'password',
    helperText: 'A senha deve ter pelo menos 8 caracteres',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    value: 'email-invalido',
    error: 'Por favor, insira um email válido',
  },
}

export const Success: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    value: 'usuario@exemplo.com',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    label: 'Nome de usuário',
    placeholder: 'Digite seu nome de usuário',
    value: 'user',
    variant: 'warning',
    helperText: 'Nome de usuário muito curto',
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    leftIcon: <Mail className="h-4 w-4" />,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Digite sua busca',
    rightIcon: <Search className="h-4 w-4" />,
  },
}

export const WithBothIcons: Story = {
  args: {
    label: 'Usuário',
    placeholder: 'Digite seu nome de usuário',
    leftIcon: <User className="h-4 w-4" />,
    rightIcon: <Calendar className="h-4 w-4" />,
  },
}

export const Small: Story = {
  args: {
    label: 'Código',
    placeholder: 'Digite o código',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Título',
    placeholder: 'Digite o título',
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Campo Desabilitado',
    placeholder: 'Este campo está desabilitado',
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    label: 'Senha',
    placeholder: 'Digite sua senha',
    type: 'password',
    leftIcon: <Lock className="h-4 w-4" />,
  },
}

export const Email: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    type: 'email',
    leftIcon: <Mail className="h-4 w-4" />,
    isRequired: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Default"
        placeholder="Campo padrão"
        variant="default"
      />
      <Input
        label="Success"
        placeholder="Campo com sucesso"
        variant="success"
        value="Valor válido"
      />
      <Input
        label="Warning"
        placeholder="Campo com aviso"
        variant="warning"
        value="Valor com aviso"
      />
      <Input
        label="Error"
        placeholder="Campo com erro"
        variant="error"
        value="Valor inválido"
        error="Este campo tem um erro"
      />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Small"
        placeholder="Campo pequeno"
        size="sm"
      />
      <Input
        label="Default"
        placeholder="Campo padrão"
        size="default"
      />
      <Input
        label="Large"
        placeholder="Campo grande"
        size="lg"
      />
    </div>
  ),
}
