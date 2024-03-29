const blog = {
  name: "blog",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default blog;
// Personal injury law is often surrounded by myths and misconceptions that can mislead accident victims and undermine their legal rights. In this blog post, we debunk some of the most common myths surrounding personal injury claims and provide clarity on the realities of pursuing compensation after an accident.

// Myth #1: You can only file a personal injury claim immediately after the accident. Reality: In many cases, the full extent of injuries may not become apparent until days, weeks, or even months after the accident. In most states, there is a statute of limitations that allows accident victims to file a personal injury claim within a certain timeframe after discovering their injuries. However, it's essential to consult with a personal injury attorney as soon as possible to ensure that you meet the necessary deadlines.

// Myth #2: You can't afford to hire a personal injury attorney. Reality: Most personal injury attorneys work on a contingency fee basis, which means that they only get paid if they successfully recover compensation on behalf of their clients. This fee structure makes legal representation accessible to accident victims regardless of their financial situation. Additionally, many attorneys offer free initial consultations to discuss the details of your case and determine the best course of action.

// Myth #3: You can't file a personal injury claim if you were partially at fault for the accident. Reality: Many states follow a comparative negligence system, which allows accident victims to recover compensation even if they were partially responsible for the accident. The amount of compensation awarded is typically reduced based on the percentage of fault assigned to the victim. Therefore, it's still possible to pursue a personal injury claim even if you share some degree of responsibility for the accident.

// Myth #4: You can't recover compensation if the at-fault party doesn't have insurance. Reality: In cases where the at-fault party is uninsured or underinsured, accident victims may still be able to recover compensation through their own insurance policies. This could include uninsured/underinsured motorist coverage, medical payments coverage, or personal injury protection (PIP) coverage. Additionally, personal injury attorneys can explore other avenues for compensation, such as pursuing a claim against the at-fault party's assets.

// By dispelling these common myths and misconceptions, we aim to empower accident victims with accurate information about their legal rights and options for pursuing compensation. If you've been injured in an accident, don't let misinformation prevent you from seeking the justice and compensation you deserve. Contact a reputable personal injury attorney to discuss your case and explore your legal options.