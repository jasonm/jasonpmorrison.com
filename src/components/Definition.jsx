import clsx from 'clsx'

export function Definition({ className, children, definition, ...props }) {
  className = clsx(
    'group inline-flex items-center gap-2 justify-center py-2 px-3 text-sm outline-offset-2 transition active:transition-none relative',
    className
  )

  return (
    <div className={className} {...props}>
      <span className="border-b-2 border-dotted border-teal-500">
        {children}
      </span>
      <span className="absolute bottom-full left-1/2 mb-2 w-72 -translate-x-1/2 transform rounded-md border border-gray-300 bg-white p-2 text-black opacity-0 transition-all duration-200 group-hover:opacity-100">
        {definition}
      </span>
    </div>
  )
}
