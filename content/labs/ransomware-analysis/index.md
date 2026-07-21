---
title: ransomware-analysis
objective: Perform static and dynamic analysis of LockBit 3.0 ransomware sample
environment: Windows 10 VM, Cuckoo Sandbox, Ghidra, Wireshark
methodology: Static analysis using Ghidra, dynamic analysis in sandbox, network traffic analysis
findings: Identified encryption algorithm, C2 communication, persistence mechanisms
evidence: Screenshots of C2 traffic, encryption process, registry modifications
lessons: Importance of behavioral analysis, network monitoring, and persistence detection
date: 2024-01-20
---

# Ransomware Analysis Lab

## Objective

Perform comprehensive analysis of LockBit 3.0 ransomware sample to understand its behavior, capabilities, and indicators of compromise.

## Environment Setup

- Windows 10 VM (isolated network)
- Cuckoo Sandbox for dynamic analysis
- Ghidra for reverse engineering
- Wireshark for network monitoring
- Process Monitor for system activity tracking

## Methodology

### Static Analysis
1. File hash verification
2. PE header analysis
3. String extraction
4. Import/export table analysis
5. Code decompilation with Ghidra

### Dynamic Analysis
1. Execution in sandbox
2. Process monitoring
3. File system changes
4. Registry modifications
5. Network traffic capture

## Findings

### Encryption Algorithm
- Uses AES-256 for file encryption
- RSA-4096 for key protection
- Custom file extension: `.lockbit`

### C2 Communication
- HTTP POST to hardcoded domain
- Encrypted payload with custom protocol
- Beacon interval: 60 seconds

### Persistence Mechanisms
- Registry run key modification
- Scheduled task creation
- Service installation
