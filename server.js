const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const HANDBOOK = `ONE FOURTEEN WHISKEY ROW — POLICY HANDBOOK

EQUAL OPPORTUNITY: No discrimination on race, creed, color, religion, sex, gender, national origin, ethnicity, sexual preference, age, disability, marital status, veteran status. Report violations to Manager.

WORKPLACE VIOLENCE: Any act/expression of violence on premises or during company business strictly prohibited. Report to supervisor immediately. Corrective action up to discharge.

DRUGS & ALCOHOL: No illegal drugs, non-prescribed drugs, or alcohol on premises or during company business. Immediate termination. Prescription drugs impairing performance must be reported to management. Company may search any property—vehicles, desks, purses, backpacks. Refusal to consent = insubordination = termination. No alcohol consumption while in uniform ever, on or off duty. Drug testing under Reasonable Suspicion standard using 5-panel screen at licensed lab. Refusing drug/alcohol test = voluntary termination.

HARASSMENT: Zero tolerance. Verbal (jokes, slurs, insults), physical (hitting, pushing, groping), sexual (unwanted advances, explicit comments), visual (offensive images/clothing), and bullying all prohibited. Report to any store management. Full objective investigation immediately. Retaliation prohibited—any supervisor retaliating faces termination.

GRIEVANCES: Report to management. If unsatisfied, escalate to employer or another manager. May be required in writing.

SAFETY: Wash hands before food handling, after restroom, before shift, after smoking. FIFO product rotation. Use gloves/utensils for food handling. Non-slip black closed-toe shoes required. Mop spills immediately; place wet floor signs. Keep work areas clean. Lift properly. Associates under 18 cannot clean ovens or certain kitchen equipment. Always have someone watching when leaving at closing. No deliveries after dark except through front door. Trash removed at night in teams of 2. Report all accidents to supervisor immediately. Failure to follow safety rules = discipline up to termination.

GUEST ACCIDENTS: Rush to help and get manager immediately. Call 911 for medical emergencies. Do not move a fallen guest.

EMPLOYEE ACCIDENTS: Report immediately. Mandatory drug/alcohol test during or right after treatment. Paid by company at approved facility. Failed drug/alcohol test = may be denied compensation benefits.

WORKERS COMP / RETURN TO WORK: Report all injuries immediately. Pass drug test to receive benefits including wage replacement and medical care. Contact employer/AGM/GM after each medical appointment with written doctor's note. Off work 3+ consecutive days: notify manager immediately; need written physician release before returning to schedule. Must cooperate with treatment plan or risk benefits loss or termination.

FMLA: 12 weeks unpaid job-protected leave per year for: pregnancy/prenatal care/childbirth; serious health condition of self, spouse, child, or parent; adoption or foster care placement. Military caregiver leave: up to 26 weeks. Eligibility: 12 months employed, worked 1,250 hours in last 12 months, site has 50+ employees within 75 miles.

DISCIPLINARY PROCESS: Verbal warning → Written warning → Termination. Termination triggers: written warning in first 90 days; 2 written warnings in any 90-day period; 3 written warnings in any 12-month period. IMMEDIATE TERMINATION (no prior steps) for: theft including giving free food/drink, not ringing all ordered products, failure to comply with company policies, inability to work positively with co-workers/supervisors/guests, insubordination, abusing guests/vendors/associates, safety violations, misconduct/dishonesty/disrespect, inappropriate language, failure to account for company funds or property, trading store products without Director of Operations approval, falsifying records or application, no call/no show, excessive absenteeism or tardiness, giving prescription drugs to employees or guests, damaging company property, damaging business reputation, unauthorized weapons on property, removing company records or releasing confidential information, horseplay, misconduct in company housing.

NOT PERMITTED AT ANY TIME: headphones/earbuds while clocked in, eating food without manager permission, smoking during service periods, gum chewing on duty, items dangling out of pockets including towels, consuming alcohol before or during shift.

GUEST COMPLAINTS: IMMEDIATELY notify the Manager on Duty for any complaint in person or by phone. Manager determines course of action.

MEETINGS: Attend all pre-shift, departmental, and staff meetings. Must notify manager if unable to attend. Failure to notify = write-up.

REQUIRED APPS: Download within first week of training. Failure may result in written warning.

SCHEDULING: Schedules posted every Friday or before. Submit schedule requests at least 14 days before posting. Once posted, changes require manager approval. Vacation: managers need 30-day advance notice for 7+ consecutive days off.

ATTENDANCE / TARDINESS: Arrive in proper uniform ready to work at scheduled time. If unable to work: post available shift notice, notify manager at least 3 hours before shift, reach out to co-workers to find coverage. If tardy: call the store and speak to manager on duty; check in with manager upon arrival before clocking in. Failure to report without notifying manager = resignation from employment. Calling off via text or email is UNACCEPTABLE—must call the bar and speak to a manager. Any associate not working for 30 continuous days is automatically terminated unless law says otherwise.

SMOKING / VAPING: Must get manager approval before taking smoke break. No breaks while serving guests. Vaping/smoking inside building or on patio strictly prohibited. Must be out of guest view in designated areas only. Wash hands immediately after. Dispose of butts properly.

CELL PHONE: Not permitted during shifts. Must be put away and completely out of guest view. No calls, texts, internet, apps, email, or checking messages. Silence or vibrate only. Exception: required apps to serve guests (e.g., untapped). Emergencies require manager approval. Excessive use = discipline up to termination.

GROOMING: Clean wrinkle-free clothing. Good personal hygiene. Scented products in moderation; heavy perfume not permitted. Long hair neatly tied back; fly-aways pinned. Nails max 1/4 inch from tip, trimmed, clean, no chipped polish. Beards: fully grown, max 1 inch, neck shaved, must comply with health code. Professional cosmetics only; extreme makeup not permitted. No extreme hair colors or styles. FOH: no facial tattoos. Other tattoos reviewed by management for offensiveness. Facial piercings: nose only, max 1 stud or hoop; no eyebrow, lip, or septum piercings. No gauges. Earrings not past chin line. Necklaces tucked under shirt. No hats.

UNIFORMS: Dark blue plain jeans, no holes or rips, worn at waistline above hip, hemline at or below ankle, no sagging or frayed jeans, belt required if belt loops present, no items dangling from pockets. Black closed-toe slip-resistant shoes; no sandals or crocs. MANAGERS: smart casual, bar tee, polo, or button-up collared shirt; dress slacks or plain blue jeans; no hats. Associates not in uniform not permitted behind bar, host station, office, server station, or kitchen. Return uniforms upon termination or resignation.

OFF-DUTY BEHAVIOR: Must be completely out of uniform and off duty. Associates 21+ allowed maximum 2 drinks (no shots) while off duty. No alcohol to go. No consuming alcohol on premises outside normal store hours. No discounts on alcohol, merchandise, etc.

MEALS & BREAKS: Designated areas only. Clean up and reset area. No feet on seats, disrupting staff, or head on table in guest areas. Breaks at management discretion per labor laws; guest needs come first. Document all meal breaks. Complimentary soft drinks available; Styrofoam cups need lids and stay in designated area.

PAYROLL: Pay periods by location—see manager. Only associate can pick up check without written authorization. Final paychecks comply with state law. Uniforms must be returned before final paycheck; unreturned uniforms deducted from check.

TIPS: All tips subject to income tax and must be reported. Failure to report = possible IRS penalties.

TIME CLOCK: Use assigned associate ID to clock in/out. Do not clock in more than 5 minutes early without manager approval. Must personally clock in and out.

PARKING: No associate parking provided. Not an acceptable excuse for tardiness.

PERSONAL VISITORS: Must sit at table or bar and order through a bartender. Not permitted in service areas. Personal calls require stepping away from bar and manager approval.

NON-FRATERNIZATION: Relatives may work together if no conflict of interest. Family members cannot supervise each other or domestic partners. No fraternization between managers and hourly associates. Romantic relationships between manager and hourly associate may result in relocation. Must immediately notify General Manager.

CHILDREN IN WORKPLACE: Not permitted during scheduled shifts. Must make childcare arrangements off premises. Exceptions require advance management approval for true emergencies only.

GOSSIP POLICY: Gossip strictly prohibited. Do not participate in or tolerate gossip. Notify supervisor if gossip continues. Gossiping can result in immediate termination.

SOCIAL MEDIA: Must be respectful in all communications about company, guests, suppliers, or team members. No profanity or vulgar language. No disparaging the company, guests, or associates. No harassment or bullying. No photos of guests or team members without permission. No confidential or proprietary information. Must include disclaimer that views are personal, not the company's. No company copyrighted logo or trademark. No reputation-harming posts.

NON-DISCLOSURE: Associates cannot disclose trade secrets during or after employment including recipes, methods, formulas, guest lists, pricing data, financial data, marketing plans. Upon termination, all company documents and property must be returned.`;

const SYSTEM_PROMPT = `You are the official Policy Assistant for One Fourteen Whiskey Row, a bar and restaurant. You answer questions exclusively for managers based on the policy handbook below.

Rules:
1. Answer ONLY based on handbook content. Never make up policies.
2. Always cite the specific policy section (e.g. "Per the Cell Phone Policy..." or "According to the Disciplinary Process section...").
3. Be concise, direct, and professional — managers need quick clear answers.
4. If not covered in the handbook, say: "That specific situation isn't covered in the handbook — please escalate to your GM or Director of Operations."
5. Format clearly. Use bullet points only when listing multiple items.

HANDBOOK:
${HANDBOOK}`;

// Proxy endpoint to Anthropic
app.post('/api/chat', async (req, res) => {
  if (!ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured on server.' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request: messages array required.' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Anthropic API error' });
    }

    res.json({ reply: data.content?.[0]?.text || 'No response received.' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// Catch-all: serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`One Fourteen Policy Assistant running on port ${PORT}`);
});
