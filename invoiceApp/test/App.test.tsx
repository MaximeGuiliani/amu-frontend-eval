import { describe, expect, it } from 'vitest'
import App from '../src/App'
import { render, screen, userEvent } from '../src/utils/test-utils'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Simple working test', () => {
  it('doit verifier que le titre existe ', () => {
    render(<App />)
    expect(screen.getByText("Clients")).toBeInTheDocument()
  })

  it('doit vérifier si le bouton "Créer un client" existe', () => {
    render(<App />)
    expect(screen.getByText("Créer un client")).toBeInTheDocument()
  });

  it('doit vérifier si le bouton "Créer un client" est cliquable', () => {
    render(<App />)
    userEvent.click(screen.getByText("Créer un client"))
    expect(screen.getByText("Créer un client")).toBeInTheDocument()

  });

  it('doit vérifier que le header et le footer est present', () => {
    render(<App />)
    // recuperr une image
    expect(screen.getAllByRole('img')).toHaveLength(2)
  });

  
})