# Email Deliverability Guide
## Domain: elevategrowth.solutions

This document contains DNS records and remediation steps to improve email deliverability from a Mail-Tester score of 5.8/10.

---

## PART 2: Updated DMARC Record

### Current Record (WEAK)
```
v=DMARC1; p=none; rua=mailto:tysen@elevategrowth.solutions
```

### New Recommended Record (STRONGER)
Add this TXT record to your DNS:

| Type | Name/Host | Value |
|------|-----------|-------|
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; pct=100; rua=mailto:tysen@elevategrowth.solutions; ruf=mailto:tysen@elevategrowth.solutions; adkim=r; aspf=r` |

### Record Breakdown

| Tag | Value | Meaning |
|-----|-------|---------|
| `v=DMARC1` | Required | DMARC version identifier |
| `p=quarantine` | **UPGRADED** | Policy: quarantine failing emails (sends to spam instead of inbox) |
| `pct=100` | New | Apply policy to 100% of failing messages |
| `rua=mailto:...` | Kept | Aggregate reports sent to your email |
| `ruf=mailto:...` | New | Forensic failure reports sent to your email |
| `adkim=r` | New | Relaxed DKIM alignment (allows subdomains) |
| `aspf=r` | New | Relaxed SPF alignment (allows subdomains) |

### DNS Provider Instructions

**For Cloudflare:**
1. Go to DNS > Records
2. Find existing `_dmarc` TXT record and edit, OR add new TXT record
3. Name: `_dmarc`
4. Content: `v=DMARC1; p=quarantine; pct=100; rua=mailto:tysen@elevategrowth.solutions; ruf=mailto:tysen@elevategrowth.solutions; adkim=r; aspf=r`
5. TTL: Auto
6. Save

**For GoDaddy:**
1. Go to My Products > DNS
2. Add or Edit TXT record
3. Host: `_dmarc`
4. TXT Value: (same as above)
5. TTL: 1 Hour
6. Save

### Verification
After adding, verify with:
```bash
dig TXT _dmarc.elevategrowth.solutions +short
```

Or use: https://mxtoolbox.com/DMARCRecordLookup.aspx

---

## PART 3: Spamcop Blacklist Remediation Checklist

Since you're sending via Google Workspace and your IP is listed on Spamcop, follow these steps **immediately**:

### Step 1: Pause All Outreach (Do This Now)

- [ ] **Stop all email campaigns immediately** - Do not send any marketing or cold emails until delisted
- [ ] Disable any automated email sequences or drip campaigns
- [ ] Pause newsletter sends
- [ ] Only send transactional/reply emails to existing conversations

### Step 2: Request Delisting from Spamcop

- [ ] Go to: https://www.spamcop.net/bl.shtml
- [ ] Enter the blocked IP address (you can find this in Mail-Tester results or email headers)
- [ ] Spamcop listings **expire automatically after 24-48 hours** if no new spam reports are received
- [ ] If using Google Workspace shared IPs, the listing may be due to other users on the same IP pool
- [ ] Consider contacting Google Workspace support to report the issue

### Step 3: Review Sending Practices to Prevent Re-listing

- [ ] **Audit your email list:**
  - Remove bounced addresses immediately
  - Remove anyone who hasn't engaged in 90+ days
  - Never purchase or scrape email lists

- [ ] **Improve opt-in practices:**
  - Use double opt-in for newsletter signups
  - Add clear unsubscribe links (required by law)
  - Honor unsubscribes within 24 hours

- [ ] **Monitor sender reputation:**
  - Sign up for Google Postmaster Tools: https://postmaster.google.com/
  - Monitor domain reputation and spam rate
  - Keep spam complaint rate below 0.1%

- [ ] **Warm up sending gradually:**
  - When resuming, start with 10-20 emails/day
  - Increase volume by 20% weekly
  - Prioritize engaged recipients first

---

## Summary of Issues Fixed

| Issue | Points Lost | Solution |
|-------|-------------|----------|
| HTML_IMAGE_ONLY_12 | -1.629 | New template with 1,500+ characters of text |
| HTML_IMAGE_RATIO_06 | -0.001 | Proper text-to-image ratio in template |
| Spamcop Listing | -1.246 | Pause sending + wait for auto-delist |
| DMARC Policy "none" | ~0 | Upgraded to `p=quarantine` |

---

## Additional Recommendations

### Verify Existing SPF Record
Ensure your SPF record includes Google Workspace:
```
v=spf1 include:_spf.google.com ~all
```

### Verify DKIM is Enabled
1. In Google Admin Console, go to Apps > Google Workspace > Gmail > Authenticate Email
2. Ensure DKIM is enabled for elevategrowth.solutions
3. Verify the DKIM record exists in DNS

### Test After Changes
After implementing these changes, wait 24-48 hours and retest at:
- https://www.mail-tester.com/
- https://mxtoolbox.com/deliverability

---

## Future Upgrade Path

Once you've maintained good deliverability for 2-4 weeks, consider upgrading DMARC to `p=reject`:
```
v=DMARC1; p=reject; pct=100; rua=mailto:tysen@elevategrowth.solutions; ruf=mailto:tysen@elevategrowth.solutions; adkim=r; aspf=r
```

This is the strictest policy and tells receiving servers to completely reject emails that fail authentication.

---

*Last updated: January 2026*
