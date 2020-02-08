import React from 'react'
import BackupButton from '.'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    title: 'atoms|BackupButton',
    component: BackupButton,
    decorators: [withKnobs],
}

export const Summary = () => {
    const label = text('children', 'BUTTON')
    const size = select('size', ['small', 'medium', 'big'], 'medium')
    const theme = select('theme', ['primary', 'secondary', 'tertiary'], 'primary')
    const disabled = boolean('disabled', false)
    const width = text('width', '')
    const height = text('height', '')
    const fontSize = text('fontSize', '')
    return (
        <>
            <BackupButton onClick={action('onClick')} theme={theme} size={size} disabled={disabled} width={width} height={height} fontSize={fontSize}>
                {label}
            </BackupButton>
        </>
    )
}
