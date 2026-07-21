---
title: threat-hunting-siem-queries
excerpt: Learn how to create custom threat hunting queries to detect lateral movement, data exfiltration, and other advanced threats in your SIEM platform.
category: Threat Hunting
tags:
  - SIEM
  - Threat Hunting
  - Security Operations
publishedDate: 2024-01-20
readingTime: 8 min read
coverImage: null
references:
  - https://attack.mitre.org
  - https://splunkbase.splunk.com
---

# Building Effective Threat Hunting Queries for SIEM

Threat hunting is a proactive approach to cybersecurity that involves searching for indicators of compromise (IOCs) and tactics, techniques, and procedures (TTPs) that may evade traditional detection methods.

## Understanding SIEM Query Languages

Most SIEM platforms use their own query languages:
- Splunk: SPL (Search Processing Language)
- Elastic: KQL (Kibana Query Language)
- Microsoft Sentinel: KQL
- Sumo Logic: SPL

## Common Threat Hunting Patterns

### Lateral Movement Detection

```spl
index=security (EventCode=4624 OR EventCode=4625) 
| stats count by src_ip, dest_ip 
| where count > 10
```

### Data Exfiltration Indicators

```spl
index=network bytes_out > 1000000 
| stats sum(bytes_out) by dest_ip 
| where sum > 10000000
```

## Best Practices

1. **Baseline Normal Behavior**: Establish baselines before hunting
2. **Iterative Refinement**: Continuously improve queries
3. **Contextual Analysis**: Consider business context
4. **Collaboration**: Share findings with team members
