import Image from 'next/image';
import { dateUtils } from '@/app/components/dateUtils';
import {
    CommandItem,
} from '@/components/ui/command';

// Subcomponente para cada post
export const PostItem = ({ post, onSelect }) => (
    <CommandItem
        key={post._id}
        onSelect={() => onSelect(post.slug.current)}
        className="group relative flex items-center gap-4 p-4 cursor-pointer w-full"
    >
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md relative">
            <Image
                src={post.mainImage}
                alt={post.alt || 'Post Image'}
                layout="fill" // Esto hará que la imagen ocupe todo el espacio disponible
                objectFit="cover" // Mantiene el comportamiento de ajuste de imagen
                className="w-full h-full" // Asegúrate de que el contenedor tenga las dimensiones correctas
            />
        </div>
        <div className="flex flex-col justify-between w-full">
            <div className="font-bold text-lg text-primary break-words">
                {post.title}
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Image
                    src={post.avatar}
                    alt={`${post.authorName}'s Avatar`}
                    width={24}
                    height={24}
                    className="rounded-full"
                />
                <span>By {post.authorName}</span>
                <span className="mx-2">•</span>
                <span>{dateUtils(post.publishedAt)}</span>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
                Categories:{' '}
                <span className="text-primary">
                    {post.categories?.join(', ') || 'None'}
                </span>
            </div>
        </div>
    </CommandItem>
);
