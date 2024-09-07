interface ButtonType {
  children: React.ReactNode
  className?: string
}

export const Button = ({ children, className }: ButtonType) => {
  return (
    <button
      type='button'
      className={`my-2 rounded-md border border-sky-200 p-4 text-lg ${className ?? ''}`}
    >
      {children}
    </button>
  )
}
