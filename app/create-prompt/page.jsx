'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';
import { Router } from 'next/router';

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })

            if (response.ok) {
                Router.push('/');
            }

        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePrompt

// https://www.youtube.com/watch?v=wm5gMKuwSYk
// left off 2:12:12

// random links
// https://mui.com/material-ui/react-slider/
// https://console.cloud.google.com/apis/credentials?project=promptopia-431119
// https://cloud.mongodb.com/v2/66aaafe27e989d6e29bb36d4#/metrics/replicaSet/66aab04da7c10c4f23248c76/explorer/share_prompt/users/find 
// https://learn.svelte.dev/tutorial/welcome-to-svelte