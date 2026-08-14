type PreviewType = "chat" | "pharmacy" | "email" | "food" | "health";

interface ProjectPreviewProps {
  type: PreviewType;
  label: string;
}

export default function ProjectPreview({ type, label }: ProjectPreviewProps) {
  return (
    <div className="preview-frame">
      <div className="preview-bar">
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="preview-url">{label}</span>
      </div>
      <div className="preview-body">
        <div className="preview-grid-bg" />
        {type === "chat" && <ChatPreview />}
        {type === "pharmacy" && <PharmacyPreview />}
        {type === "email" && <EmailPreview />}
        {type === "food" && <FoodPreview />}
        {type === "health" && <HealthPreview />}
      </div>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="pv-chat">
      <div className="pv-msg bot">Hi, I can see our last conversation. What do you need today?</div>
      <div className="pv-msg user">Can you check if the order from Tuesday shipped?</div>
      <div className="pv-voice">
        <div className="pv-wave">
          <span /><span /><span /><span /><span /><span />
        </div>
        <span className="pv-voice-label">Voice message · 0:12</span>
      </div>
      <div className="pv-msg bot">Order #4821 shipped Tuesday — arriving Friday. I remember you asked about it last week too.</div>
      <div className="pv-memory">
        <i /> Persistent memory · session restored
      </div>
    </div>
  );
}

function PharmacyPreview() {
  return (
    <div className="pv-dash">
      <div className="pv-kpi-row">
        <div className="pv-kpi">
          <div className="pv-kpi-label">Today&rsquo;s Sales</div>
          <div className="pv-kpi-value">₹48.2k</div>
        </div>
        <div className="pv-kpi">
          <div className="pv-kpi-label">Stock Items</div>
          <div className="pv-kpi-value">1,284</div>
        </div>
        <div className="pv-kpi">
          <div className="pv-kpi-label">Low Stock</div>
          <div className="pv-kpi-value">23</div>
        </div>
      </div>
      <div className="pv-table">
        <div className="pv-table-row head">
          <span>PRODUCT</span>
          <span>STOCK</span>
          <span>STATUS</span>
        </div>
        {[
          ["Amoxicillin 500mg", "Ok"],
          ["Paracetamol 650mg", "Reorder"],
          ["Vitamin D3 60k", "Ok"],
          ["Insulin Glargine", "Reorder"],
          ["Saline 500ml", "Ok"],
        ].map(([name, status]) => (
          <div className="pv-table-row" key={name}>
            <span>{name}</span>
            <span className="pv-bar">
              <i className={status === "Reorder" ? "w4" : "w3"} />
            </span>
            <span>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailPreview() {
  return (
    <div className="pv-inbox">
      <div className="pv-mail auto">
        <span className="pv-mail-icon">AI</span>
        <div className="pv-mail-body">
          <div className="pv-mail-title">Invoice overdue — follow-up sent automatically</div>
          <div className="pv-mail-meta">
            <em>CLASSIFIED</em> · <em>ACTIONED</em> · 09:41
          </div>
        </div>
      </div>
      <div className="pv-mail">
        <span className="pv-mail-icon">RE</span>
        <div className="pv-mail-body">
          <div className="pv-mail-title">Meeting notes — routed to project folder</div>
          <div className="pv-mail-meta">
            <em>ROUTED</em> · 08:12
          </div>
        </div>
      </div>
      <div className="pv-mail">
        <span className="pv-mail-icon">IN</span>
        <div className="pv-mail-body">
          <div className="pv-mail-title">New lead — created in CRM</div>
          <div className="pv-mail-meta">
            <em>ENRICHED</em> · 07:55
          </div>
        </div>
      </div>
      <div className="pv-flow">
        <span className="pv-flow-node on">INBOX</span>
        <span className="pv-flow-sep">→</span>
        <span className="pv-flow-node on">AI READ</span>
        <span className="pv-flow-sep">→</span>
        <span className="pv-flow-node on">ROUTE</span>
        <span className="pv-flow-sep">→</span>
        <span className="pv-flow-node">ACTION</span>
      </div>
    </div>
  );
}

function FoodPreview() {
  return (
    <div className="pv-food">
      <div className="pv-menu">
        {[
          ["Margherita Pizza", "₹349"],
          ["Paneer Tikka Bowl", "₹289"],
          ["Veg Biryani", "₹319"],
          ["Garlic Bread", "₹149"],
        ].map(([name, price]) => (
          <div className="pv-dish" key={name}>
            <div>
              <div className="pv-dish-name">{name}</div>
              <div className="pv-dish-price">{price}</div>
            </div>
            <span className="pv-add">+</span>
          </div>
        ))}
      </div>
      <div className="pv-cart">
        <div className="pv-cart-head">Your Order</div>
        <div className="pv-cart-item">
          <span>Margherita Pizza</span>
          <span>₹349</span>
        </div>
        <div className="pv-cart-item">
          <span>Veg Biryani</span>
          <span>₹319</span>
        </div>
        <div className="pv-cart-total">
          <span>Total</span>
          <span>₹668</span>
        </div>
        <div className="pv-cart-item" style={{ justifyContent: "center" }}>
          <span className="pv-status confirmed">ORDER PLACED</span>
        </div>
      </div>
    </div>
  );
}

function HealthPreview() {
  return (
    <div className="pv-health">
      <div className="pv-sched">
        {[
          ["09:30", "Dr. Rao — Cardiology", "confirmed"],
          ["10:45", "Mrs. Iyer — Follow-up", "confirmed"],
          ["12:15", "New patient — General", "pending"],
          ["14:00", "Lab report review", "pending"],
        ].map(([time, name, status]) => (
          <div className="pv-appt" key={time}>
            <span className="pv-appt-time">{time}</span>
            <div className="pv-appt-info">
              <div className="pv-appt-name">{name}</div>
              <div className="pv-appt-type">Outpatient</div>
            </div>
            <span className={`pv-status ${status}`}>{status === "confirmed" ? "CONFIRMED" : "PENDING"}</span>
          </div>
        ))}
      </div>
      <div className="pv-records">
        {[
          ["Patients", "1,920"],
          ["Appointments", "86"],
          ["Pending", "12"],
        ].map(([label, value]) => (
          <div className="pv-record" key={label}>
            <div className="pv-record-label">{label}</div>
            <div className="pv-record-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
