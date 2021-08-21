## Thread Test

This repo tests whether both the `messageCreate` and `threadCreate` event are emitted when creating a thread. The repo uses the latest version of discord.js as of writing, which is `v13.1.0`

When I ran this and created a thread on no message (subsequentially sending a message to start the thread on), the following was outputted:

```
Message created with content -- some thread
Thread created with name -- some thread
Message created with content -- with some message
```

When I ran this and created a thread on a cached message already sent, the following was outputted:

```
Thread created with name -- some thread
Message created with content --
```

When I ran this and created a thread on a uncached message already sent, the following was outputted:

```
Thread created with name -- thread on uncached message
Message created with content -- 
Message created with content -- thread on uncached message
```