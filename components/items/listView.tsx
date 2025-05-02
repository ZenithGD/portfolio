import { FSNode, FolderFSNode, isFolderFSNode } from '@/lib/filesystem'
import { FileText, Folder } from '@react95/icons'
import React from 'react'

type Props = { list: FSNode[] }

function ListView({ list }: Props) {
  return (

    list.map((e: FSNode, k) => <div className='w-full'>
      {isFolderFSNode(e)
        ? <button className='flex w-full'>
            <div>
              <Folder variant='16x16_4' />
            </div>
            <div>
              {e.name}
            </div>
          </button>
        : <button className='flex w-full'>
            <div>
              <FileText variant='16x16_4' />
            </div>
            <div>
              {e.name}
            </div>
          </button>
      }
    </div>)
  )
}

export default ListView