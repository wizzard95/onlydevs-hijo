import { Icon } from '@iconify/react'
import { PostImageFrame } from './PostImageFrame'

export const PublicacionCard = () => {
    return (
        <div className="border-b border-gray-500/50 p-4">
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f5/f8/67/photo1jpg.jpg?w=2000&h=-1&s=1"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="font-bold">nombre de usuario</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm whitespace-nowrap">
                        hace 8h
                    </span>
                    <button>
                        <Icon
                            icon="mdi:dots-horizontal"
                            className="text-gray-500"
                        />
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <p className="mb-2">titulo</p>
            </div>
            <div>
                <PostImageFrame />
            </div>
        </div>
    )
}
