---
title: "Why tail latency decides collective bandwidth"
description: "An all-reduce is only as fast as its slowest participant, which makes the p99 link the one worth measuring."
pubDate: 2026-09-02
tags: ["interconnect", "nccl"]
draft: false
---

This is a placeholder post so the layout has something to render. Delete it
once you have something real, or keep it and rewrite the body.

## Headings look like this

Body text is IBM Plex Serif at a measure of about 68 characters, which is on
the long side for a sans and about right for a serif.

Inline `code` and fenced blocks both work, with syntax highlighting:

```c
struct ibv_qp_attr attr = {
    .qp_state        = IBV_QPS_RTR,
    .path_mtu        = IBV_MTU_4096,
    .dest_qp_num     = remote->qp_num,
    .rq_psn          = remote->psn,
};
```

Tables are styled too:

| Generation | Signalling | Lane rate |
| --- | --- | --- |
| HDR | PAM4 | 50 Gb/s |
| NDR | PAM4 | 100 Gb/s |
| XDR | PAM4 | 200 Gb/s |

> Block quotes get a hairline rule rather than a tinted panel.

That's the whole vocabulary. Anything else you need, add to `global.css`
under the `.prose` block.
