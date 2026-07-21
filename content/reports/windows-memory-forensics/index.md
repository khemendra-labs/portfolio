---
title: windows-memory-forensics
category: DFIR
summary: Comprehensive analysis of Windows memory dump using Volatility 3 to detect malicious processes and network connections
tools:
  - Volatility 3
  - Windows 10 VM
  - Mimikatz
cves: []
references:
  - https://volatility-labs.blogspot.com
  - https://github.com/volatilityfoundation/volatility3
date: 2024-01-15
---

# Windows Memory Forensics Analysis

## Executive Summary

This report details the forensic analysis of a Windows 10 memory dump to identify malicious processes, network connections, and artifacts of compromise.

## Analysis Methodology

### 1. Image Information
Used `windows.info` plugin to identify the system profile and memory structure.

### 2. Process Analysis
Enumerated running processes using `windows.pslist` and `windows.pstree`.

### 3. Network Connections
Analyzed network connections with `windows.netscan`.

### 4. Malware Artifacts
Scanned for injected code and suspicious DLLs.

## Findings

- Suspicious process: `svchost.exe` with unusual parent PID
- Hidden network connection to 192.168.1.100:4444
- Evidence of process hollowing technique
