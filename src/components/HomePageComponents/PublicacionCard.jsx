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
                <PostImageFrame
                    src={
                        'https://images.unsplash.com/photo-1581260466152-d2c0303e54f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                />
            </div>
            <div className="flex justify-between mt-4 gap-2 cursor-pointer">
                <button>
                    <Icon
                        icon={'mdi:heart-outline'}
                        className="text-3xl p-1 rounded-full text-gray-400 
                        hover:bg-[rgba(78,184,233,0.2)] cursor-pointer"
                    />
                </button>
                <button className="flex items-center">
                    <Icon
                        icon={'mdi:comment-outline'}
                        className="text-3xl p-1 rounded-full text-gray-400 
                        hover:bg-[rgba(78,184,233,0.2)] cursor-pointer"
                    />
                    <span className="text-xs md:text-sm text-gray-400">
                        Comentar
                    </span>
                </button>
            </div>
        </div>
    )
}
