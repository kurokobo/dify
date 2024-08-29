import {
  RiAlertFill,
  RiCloseLine,
} from '@remixicon/react'
import { useStore } from './store'
import ActionButton from '@/app/components/base/action-button'

const LimitTips = () => {
  const showTips = useStore(s => s.showTips)
  const setShowTips = useStore(s => s.setShowTips)

  if (!showTips)
    return null

  return (
    <div className='absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center rounded-xl p-2 h-10 border border-components-panel-border bg-components-panel-bg-blur shadow-md z-[9]'>
      <div className='flex items-center justify-center w-5 h-5'>
        <RiAlertFill className='w-4 h-4 text-text-warning-secondary' />
      </div>
      <div className='mx-1 px-1 system-xs-medium text-text-primary'>
        {showTips}
      </div>
      <ActionButton
        onClick={() => setShowTips('')}
      >
        <RiCloseLine className='w-4 h-4' />
      </ActionButton>
    </div>
  )
}

export default LimitTips