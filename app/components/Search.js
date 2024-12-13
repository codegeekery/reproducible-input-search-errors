
'use client'
import * as React from 'react';
import { useSearchPosts } from '@/app/components/usePosts';
import { Button } from '@/components/ui/button';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
} from '@/components/ui/command';
import { Search, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

// Component Modular
import { PostItem } from './ItemPost';
// import { useDebouncedValue } from './useDebounce';




export function CommandSearch() {

    // State for Open and Close Modal
    const [open, setOpen] = React.useState(false);

    // State for Saving the Search Term
    const [SEARCH, setSEARCH] = React.useState(undefined);

    // The `useDebouncedValue` hook is used to delay the update of `searchTerm`.
    // This prevents unnecessary renders or API calls while the user is typing.
    // The `300` value specifies a debounce time of 500ms.
    // const debouncedSearchTerm = useDebouncedValue(SEARCH, 500);

    // Actualiza el estado de la búsqueda cuando el valor debounced cambie
    //  React.useEffect(() => {
    //     setSEARCH(debouncedSearchTerm);
    // }, [debouncedSearchTerm]);

    // Hook Function for Run the fectch that have a query for find a post
    const { postData, isLoading } = useSearchPosts(SEARCH);

    // Navigation and router push after click a post
    const router = useRouter();

    // Effect hook to toggle the search dialog when the "Ctrl+K" or "Cmd+K" keyboard shortcut is pressed.
    // It listens for the keydown event and opens/closes the dialog accordingly.
    React.useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open); // Toggle the dialog's open state.
            }
        };
        document.addEventListener('keydown', down); // Attach the event listener on mount.
        return () => document.removeEventListener('keydown', down); // Cleanup the event listener on unmount.
    }, []);


    return (
        <>
            <Button
                variant="outline"
                className={cn('relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2', open && 'border-primary')}
                onClick={() => setOpen(true)}
            >
                <Search className="h-4 w-4 xl:mr-2" />
                <span className="hidden xl:inline-flex">Search posts...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
                    <span className="text-xs">ctrl</span>K
                </kbd>
            </Button>
            <CommandDialog
                open={open}
                onOpenChange={(isOpen) => {
                    setOpen(isOpen);
                    if (!isOpen) setSEARCH(undefined); // Clear the search state only when closing the dialog.
                }}
                className="w-auto max-w-[90vw] p-4"
            >
                <CommandInput
                    placeholder="Search posts..."
                    value={SEARCH}
                    onValueChange={(value) => { setSEARCH(value); }}
                />
                <CommandList>
                    {isLoading ? (
                        <div className="flex items-center justify-center py-6">
                            <Loader2 className="h-6 w-6 animate-spin text-primary" />
                        </div>
                    ) : postData?.length > 0 ? (
                        <CommandGroup heading="Search Results">
                            {postData.map((post) => (
                                <PostItem
                                    key={post._id}
                                    post={post}
                                    onSelect={(slug) => {
                                        setOpen(false); // Close the dialog.
                                        setSEARCH(undefined); // Clear the search state.
                                        router.push(`/${slug}`); // Navigate to the selected post.
                                    }}
                                />
                            ))}
                        </CommandGroup>
                    ) : (
                        <CommandEmpty>
                            No results found.
                        </CommandEmpty>
                    )}
                </CommandList>
            </CommandDialog>
        </>
    );
};

