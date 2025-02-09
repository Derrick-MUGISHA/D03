'use client'

import { CreateNewDocument } from '@/Actions/Actions';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

function NewDocumentButton() {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = () => {
    startTransition(async () => {

      const {docId} = await CreateNewDocument();
      router.push(`/documents/${docId}`);
    });

  };


  return <Button onClick={handleCreateNewDocument} disabled={isPending}>
    {isPending ? "Creating..." : "New Document"}</Button>
}

export default NewDocumentButton;