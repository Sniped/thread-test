## Thread Test

This repo tests whether both the `messageCreate` and `threadCreate` event are emitted when creating a thread. The repo uses the latest version of discord.js as of writing, which is `v13.1.0`

When I ran this and created a thread on no message, the following was outputted:

```
ready
Message created with content -- some thread
Thread created with name -- some thread
Message created with content -- with some message
```

When I ran this and created a thread on a cached message, the following was outputted:

```
Thread created with name -- some thread
Message created with content --
```