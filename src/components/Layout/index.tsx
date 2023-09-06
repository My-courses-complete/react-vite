export default function Layout({ children } : LayoutProps) {
  return (
	<div className='flex flex-col mt-20 '>
		{children}
	</div>
  )
}
