export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      activities: {
        Row: {
          action: string
          created_at: string | null
          details: Json | null
          entity_id: string
          entity_type: string
          id: string
          organization_id: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          details?: Json | null
          entity_id: string
          entity_type: string
          id?: string
          organization_id?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          details?: Json | null
          entity_id?: string
          entity_type?: string
          id?: string
          organization_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activities_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      api_usage_logs: {
        Row: {
          cost_cents: number | null
          created_at: string | null
          endpoint: string | null
          error_message: string | null
          id: string
          organization_id: string
          processing_time_ms: number | null
          provider: string
          request_data: Json | null
          response_data: Json | null
          success: boolean | null
        }
        Insert: {
          cost_cents?: number | null
          created_at?: string | null
          endpoint?: string | null
          error_message?: string | null
          id?: string
          organization_id: string
          processing_time_ms?: number | null
          provider: string
          request_data?: Json | null
          response_data?: Json | null
          success?: boolean | null
        }
        Update: {
          cost_cents?: number | null
          created_at?: string | null
          endpoint?: string | null
          error_message?: string | null
          id?: string
          organization_id?: string
          processing_time_ms?: number | null
          provider?: string
          request_data?: Json | null
          response_data?: Json | null
          success?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "api_usage_logs_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_recipients: {
        Row: {
          campaign_id: string | null
          created_at: string | null
          id: string
          lead_id: string | null
          status: Database["public"]["Enums"]["recipient_status"]
          updated_at: string | null
        }
        Insert: {
          campaign_id?: string | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          status?: Database["public"]["Enums"]["recipient_status"]
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          status?: Database["public"]["Enums"]["recipient_status"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_recipients_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_recipients_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          click_rate: number | null
          content: string | null
          created_at: string | null
          id: string
          name: string
          open_rate: number | null
          organization_id: string | null
          recipients: number | null
          scheduled_for: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["campaign_status"]
          subject: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          click_rate?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          name: string
          open_rate?: number | null
          organization_id?: string | null
          recipients?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["campaign_status"]
          subject: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          click_rate?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          name?: string
          open_rate?: number | null
          organization_id?: string | null
          recipients?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["campaign_status"]
          subject?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      change_orders: {
        Row: {
          created_at: string | null
          id: string
          lead_id: string | null
          order_data: Json
          order_number: string
          organization_id: string | null
          signatures: Json | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          lead_id?: string | null
          order_data: Json
          order_number: string
          organization_id?: string | null
          signatures?: Json | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          lead_id?: string | null
          order_data?: Json
          order_number?: string
          organization_id?: string | null
          signatures?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "change_orders_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "change_orders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          address: string | null
          awards: string[] | null
          bond_amount: string | null
          branding: Json | null
          certifications: string[] | null
          created_at: string | null
          default_terms: Json | null
          default_warranty_workmanship: Json | null
          email: string | null
          experience: string | null
          id: string
          liability_insurance: string | null
          license_number: string | null
          logo_url: string | null
          mission: string | null
          name: string
          organization_id: string | null
          phone: string | null
          updated_at: string | null
          user_id: string | null
          website: string | null
          why_choose_us: string | null
          workers_comp_insurance: string | null
        }
        Insert: {
          address?: string | null
          awards?: string[] | null
          bond_amount?: string | null
          branding?: Json | null
          certifications?: string[] | null
          created_at?: string | null
          default_terms?: Json | null
          default_warranty_workmanship?: Json | null
          email?: string | null
          experience?: string | null
          id?: string
          liability_insurance?: string | null
          license_number?: string | null
          logo_url?: string | null
          mission?: string | null
          name: string
          organization_id?: string | null
          phone?: string | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
          why_choose_us?: string | null
          workers_comp_insurance?: string | null
        }
        Update: {
          address?: string | null
          awards?: string[] | null
          bond_amount?: string | null
          branding?: Json | null
          certifications?: string[] | null
          created_at?: string | null
          default_terms?: Json | null
          default_warranty_workmanship?: Json | null
          email?: string | null
          experience?: string | null
          id?: string
          liability_insurance?: string | null
          license_number?: string | null
          logo_url?: string | null
          mission?: string | null
          name?: string
          organization_id?: string | null
          phone?: string | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
          why_choose_us?: string | null
          workers_comp_insurance?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "companies_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      contracts: {
        Row: {
          contract_data: Json
          contract_number: string
          created_at: string | null
          id: string
          lead_id: string | null
          organization_id: string | null
          signatures: Json | null
          updated_at: string | null
        }
        Insert: {
          contract_data: Json
          contract_number: string
          created_at?: string | null
          id?: string
          lead_id?: string | null
          organization_id?: string | null
          signatures?: Json | null
          updated_at?: string | null
        }
        Update: {
          contract_data?: Json
          contract_number?: string
          created_at?: string | null
          id?: string
          lead_id?: string | null
          organization_id?: string | null
          signatures?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_locations: {
        Row: {
          address: string
          created_at: string | null
          customer_id: string | null
          geocoded_at: string | null
          geocoding_source: string | null
          id: string
          latitude: number | null
          longitude: number | null
          organization_id: string | null
          updated_at: string | null
        }
        Insert: {
          address: string
          created_at?: string | null
          customer_id?: string | null
          geocoded_at?: string | null
          geocoding_source?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          organization_id?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string
          created_at?: string | null
          customer_id?: string | null
          geocoded_at?: string | null
          geocoding_source?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          organization_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_locations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_roof_profiles: {
        Row: {
          address: string
          architectural_style: string | null
          created_at: string | null
          current_material: string | null
          customer_id: string
          id: string
          installation_date: string | null
          notes: string | null
          organization_id: string
          roof_pitch: string | null
          roof_type: string | null
          square_footage: number | null
          story_count: number | null
          updated_at: string | null
        }
        Insert: {
          address: string
          architectural_style?: string | null
          created_at?: string | null
          current_material?: string | null
          customer_id: string
          id?: string
          installation_date?: string | null
          notes?: string | null
          organization_id: string
          roof_pitch?: string | null
          roof_type?: string | null
          square_footage?: number | null
          story_count?: number | null
          updated_at?: string | null
        }
        Update: {
          address?: string
          architectural_style?: string | null
          created_at?: string | null
          current_material?: string | null
          customer_id?: string
          id?: string
          installation_date?: string | null
          notes?: string | null
          organization_id?: string
          roof_pitch?: string | null
          roof_type?: string | null
          square_footage?: number | null
          story_count?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_roof_profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      deals: {
        Row: {
          company: string
          contact: string
          created_at: string | null
          created_by: string | null
          email: string | null
          expected_close_date: string | null
          id: string
          notes: string | null
          organization_id: string | null
          phone: string | null
          priority: string | null
          probability: number | null
          stage: string
          tags: string[] | null
          title: string
          updated_at: string | null
          value: number | null
        }
        Insert: {
          company: string
          contact: string
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          expected_close_date?: string | null
          id?: string
          notes?: string | null
          organization_id?: string | null
          phone?: string | null
          priority?: string | null
          probability?: number | null
          stage?: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
          value?: number | null
        }
        Update: {
          company?: string
          contact?: string
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          expected_close_date?: string | null
          id?: string
          notes?: string | null
          organization_id?: string | null
          phone?: string | null
          priority?: string | null
          probability?: number | null
          stage?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "deals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      deals_created: {
        Row: {
          contract_id: string | null
          created_at: string | null
          id: string
          lead_id: string | null
          project_id: string | null
          source: string | null
          status: string | null
          value: number | null
        }
        Insert: {
          contract_id?: string | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          project_id?: string | null
          source?: string | null
          status?: string | null
          value?: number | null
        }
        Update: {
          contract_id?: string | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          project_id?: string | null
          source?: string | null
          status?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "deals_created_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_created_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_created_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string | null
          file_url: string | null
          id: string
          is_active: boolean | null
          name: string
          organization_id: string | null
          template: Json
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          file_url?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          organization_id?: string | null
          template: Json
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          file_url?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          organization_id?: string | null
          template?: Json
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      estimates: {
        Row: {
          attachments: Json | null
          created_at: string | null
          customer_info: Json
          id: string
          labor: Json
          lead_id: string | null
          materials: Json
          organization_id: string | null
          project_details: Json
          signatures: Json | null
          totals: Json
          updated_at: string | null
        }
        Insert: {
          attachments?: Json | null
          created_at?: string | null
          customer_info: Json
          id?: string
          labor: Json
          lead_id?: string | null
          materials: Json
          organization_id?: string | null
          project_details: Json
          signatures?: Json | null
          totals: Json
          updated_at?: string | null
        }
        Update: {
          attachments?: Json | null
          created_at?: string | null
          customer_info?: Json
          id?: string
          labor?: Json
          lead_id?: string | null
          materials?: Json
          organization_id?: string | null
          project_details?: Json
          signatures?: Json | null
          totals?: Json
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estimates_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "estimates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      form_submissions: {
        Row: {
          created_at: string | null
          data: Json
          id: string
          lead_id: string | null
          organization_id: string | null
          template_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          data: Json
          id?: string
          lead_id?: string | null
          organization_id?: string | null
          template_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          data?: Json
          id?: string
          lead_id?: string | null
          organization_id?: string | null
          template_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "form_submissions_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "form_submissions_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "documents"
            referencedColumns: ["id"]
          },
        ]
      }
      inspections: {
        Row: {
          created_at: string | null
          findings: Json
          id: string
          inspection_date: string
          inspector_id: string | null
          organization_id: string | null
          photos: Json[] | null
          project_id: string | null
          recommendations: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          findings: Json
          id?: string
          inspection_date: string
          inspector_id?: string | null
          organization_id?: string | null
          photos?: Json[] | null
          project_id?: string | null
          recommendations?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          findings?: Json
          id?: string
          inspection_date?: string
          inspector_id?: string | null
          organization_id?: string | null
          photos?: Json[] | null
          project_id?: string | null
          recommendations?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inspections_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inspections_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_line_items: {
        Row: {
          created_at: string | null
          description: string
          id: string
          invoice_id: string | null
          quantity: number
          sort_order: number | null
          total: number
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          invoice_id?: string | null
          quantity?: number
          sort_order?: number | null
          total: number
          unit_price: number
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          invoice_id?: string | null
          quantity?: number
          sort_order?: number | null
          total?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_line_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          balance_due: number
          bill_to_address: string | null
          bill_to_email: string | null
          bill_to_name: string
          bill_to_phone: string | null
          created_at: string | null
          created_by: string | null
          customer_id: string | null
          discount_amount: number | null
          due_date: string
          estimate_id: string | null
          id: string
          invoice_number: string
          issue_date: string
          notes: string | null
          organization_id: string | null
          paid_amount: number | null
          paid_at: string | null
          payment_terms: string | null
          project_id: string | null
          sent_at: string | null
          status: string
          stripe_customer_id: string | null
          stripe_invoice_id: string | null
          stripe_payment_intent_id: string | null
          subtotal: number
          tax_amount: number
          tax_rate: number | null
          terms: string | null
          total_amount: number
          updated_at: string | null
          viewed_at: string | null
        }
        Insert: {
          balance_due?: number
          bill_to_address?: string | null
          bill_to_email?: string | null
          bill_to_name: string
          bill_to_phone?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_id?: string | null
          discount_amount?: number | null
          due_date: string
          estimate_id?: string | null
          id?: string
          invoice_number: string
          issue_date?: string
          notes?: string | null
          organization_id?: string | null
          paid_amount?: number | null
          paid_at?: string | null
          payment_terms?: string | null
          project_id?: string | null
          sent_at?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_invoice_id?: string | null
          stripe_payment_intent_id?: string | null
          subtotal?: number
          tax_amount?: number
          tax_rate?: number | null
          terms?: string | null
          total_amount?: number
          updated_at?: string | null
          viewed_at?: string | null
        }
        Update: {
          balance_due?: number
          bill_to_address?: string | null
          bill_to_email?: string | null
          bill_to_name?: string
          bill_to_phone?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_id?: string | null
          discount_amount?: number | null
          due_date?: string
          estimate_id?: string | null
          id?: string
          invoice_number?: string
          issue_date?: string
          notes?: string | null
          organization_id?: string | null
          paid_amount?: number | null
          paid_at?: string | null
          payment_terms?: string | null
          project_id?: string | null
          sent_at?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_invoice_id?: string | null
          stripe_payment_intent_id?: string | null
          subtotal?: number
          tax_amount?: number
          tax_rate?: number | null
          terms?: string | null
          total_amount?: number
          updated_at?: string | null
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_estimate_id_fkey"
            columns: ["estimate_id"]
            isOneToOne: false
            referencedRelation: "estimates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          notes: string | null
          organization_id: string | null
          phone: string | null
          source: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          organization_id?: string | null
          phone?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          organization_id?: string | null
          phone?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      material_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          organization_id: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          organization_id: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          organization_id?: string
          sort_order?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "material_categories_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      material_specifications: {
        Row: {
          brand: string | null
          brochure_url: string | null
          category: string
          created_at: string | null
          default_price: number | null
          default_unit: string | null
          description: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          model: string | null
          name: string
          organization_id: string | null
          specifications: Json | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          brand?: string | null
          brochure_url?: string | null
          category: string
          created_at?: string | null
          default_price?: number | null
          default_unit?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          model?: string | null
          name: string
          organization_id?: string | null
          specifications?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          brand?: string | null
          brochure_url?: string | null
          category?: string
          created_at?: string | null
          default_price?: number | null
          default_unit?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          model?: string | null
          name?: string
          organization_id?: string | null
          specifications?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "material_specifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          organization_id: string | null
          read: boolean | null
          read_at: string | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          organization_id?: string | null
          read?: boolean | null
          read_at?: string | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          organization_id?: string | null
          read?: boolean | null
          read_at?: string | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_invitations: {
        Row: {
          created_at: string
          id: string
          invited_email: string
          organization_id: string
          sent_by_user_id: string | null
          status: string
          token: string
        }
        Insert: {
          created_at?: string
          id?: string
          invited_email: string
          organization_id: string
          sent_by_user_id?: string | null
          status?: string
          token?: string
        }
        Update: {
          created_at?: string
          id?: string
          invited_email?: string
          organization_id?: string
          sent_by_user_id?: string | null
          status?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_invitations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_members: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          organization_id: string | null
          role: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          organization_id?: string | null
          role: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          organization_id?: string | null
          role?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string | null
          id: string
          logo_url: string | null
          name: string
          settings: Json | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name: string
          settings?: Json | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          settings?: Json | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      payment_methods: {
        Row: {
          bank_last4: string | null
          bank_name: string | null
          card_brand: string | null
          card_exp_month: number | null
          card_exp_year: number | null
          card_last4: string | null
          created_at: string | null
          customer_id: string | null
          id: string
          is_active: boolean | null
          is_default: boolean | null
          organization_id: string | null
          stripe_customer_id: string
          stripe_payment_method_id: string
          type: string
          updated_at: string | null
        }
        Insert: {
          bank_last4?: string | null
          bank_name?: string | null
          card_brand?: string | null
          card_exp_month?: number | null
          card_exp_year?: number | null
          card_last4?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          organization_id?: string | null
          stripe_customer_id: string
          stripe_payment_method_id: string
          type: string
          updated_at?: string | null
        }
        Update: {
          bank_last4?: string | null
          bank_name?: string | null
          card_brand?: string | null
          card_exp_month?: number | null
          card_exp_year?: number | null
          card_last4?: string | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          organization_id?: string | null
          stripe_customer_id?: string
          stripe_payment_method_id?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_methods_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_methods_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string | null
          created_by: string | null
          id: string
          invoice_id: string | null
          notes: string | null
          organization_id: string | null
          payment_date: string
          payment_method: string
          reference_number: string | null
          stripe_charge_id: string | null
          stripe_payment_intent_id: string | null
          stripe_payment_method_id: string | null
          stripe_status: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          created_by?: string | null
          id?: string
          invoice_id?: string | null
          notes?: string | null
          organization_id?: string | null
          payment_date?: string
          payment_method: string
          reference_number?: string | null
          stripe_charge_id?: string | null
          stripe_payment_intent_id?: string | null
          stripe_payment_method_id?: string | null
          stripe_status?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          created_by?: string | null
          id?: string
          invoice_id?: string | null
          notes?: string | null
          organization_id?: string | null
          payment_date?: string
          payment_method?: string
          reference_number?: string | null
          stripe_charge_id?: string | null
          stripe_payment_intent_id?: string | null
          stripe_payment_method_id?: string | null
          stripe_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      photos: {
        Row: {
          created_at: string | null
          created_by: string | null
          entity_id: string
          entity_type: string
          id: string
          name: string | null
          organization_id: string | null
          size: number | null
          type: string | null
          url: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          entity_id: string
          entity_type: string
          id?: string
          name?: string | null
          organization_id?: string | null
          size?: number | null
          type?: string | null
          url: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          entity_id?: string
          entity_type?: string
          id?: string
          name?: string | null
          organization_id?: string | null
          size?: number | null
          type?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "photos_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          actual_cost: number | null
          budget: number | null
          created_at: string | null
          details: Json | null
          end_date: string | null
          id: string
          lead_id: string | null
          name: string
          organization_id: string | null
          start_date: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          actual_cost?: number | null
          budget?: number | null
          created_at?: string | null
          details?: Json | null
          end_date?: string | null
          id?: string
          lead_id?: string | null
          name: string
          organization_id?: string | null
          start_date?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          actual_cost?: number | null
          budget?: number | null
          created_at?: string | null
          details?: Json | null
          end_date?: string | null
          id?: string
          lead_id?: string | null
          name?: string
          organization_id?: string | null
          start_date?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      proposal_history: {
        Row: {
          changed_by: string | null
          changes: Json | null
          created_at: string | null
          id: string
          proposal_id: string | null
          version: number
        }
        Insert: {
          changed_by?: string | null
          changes?: Json | null
          created_at?: string | null
          id?: string
          proposal_id?: string | null
          version: number
        }
        Update: {
          changed_by?: string | null
          changes?: Json | null
          created_at?: string | null
          id?: string
          proposal_id?: string | null
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "proposal_history_proposal_id_fkey"
            columns: ["proposal_id"]
            isOneToOne: false
            referencedRelation: "proposals"
            referencedColumns: ["id"]
          },
        ]
      }
      proposal_templates: {
        Row: {
          branding: Json | null
          created_at: string | null
          description: string | null
          id: string
          is_default: boolean | null
          is_public: boolean | null
          name: string
          organization_id: string | null
          sections: Json
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          branding?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          is_public?: boolean | null
          name: string
          organization_id?: string | null
          sections?: Json
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          branding?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          is_public?: boolean | null
          name?: string
          organization_id?: string | null
          sections?: Json
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposal_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      proposal_views: {
        Row: {
          id: string
          ip_address: unknown | null
          pages_viewed: string[] | null
          proposal_id: string | null
          user_agent: string | null
          view_duration: number | null
          viewed_at: string | null
        }
        Insert: {
          id?: string
          ip_address?: unknown | null
          pages_viewed?: string[] | null
          proposal_id?: string | null
          user_agent?: string | null
          view_duration?: number | null
          viewed_at?: string | null
        }
        Update: {
          id?: string
          ip_address?: unknown | null
          pages_viewed?: string[] | null
          proposal_id?: string | null
          user_agent?: string | null
          view_duration?: number | null
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposal_views_proposal_id_fkey"
            columns: ["proposal_id"]
            isOneToOne: false
            referencedRelation: "proposals"
            referencedColumns: ["id"]
          },
        ]
      }
      proposals: {
        Row: {
          access_token: string | null
          branding: Json | null
          client_info: Json
          company_info: Json | null
          created_at: string | null
          id: string
          lead_id: string | null
          metadata: Json | null
          organization_id: string | null
          original_pdf_url: string | null
          pdf_url: string | null
          pricing: Json | null
          project_details: Json | null
          proposal_number: string | null
          sections: Json
          sent_at: string | null
          signatures: Json | null
          signed_at: string | null
          status: string | null
          template_id: string | null
          title: string
          updated_at: string | null
          user_id: string | null
          viewed_at: string | null
        }
        Insert: {
          access_token?: string | null
          branding?: Json | null
          client_info?: Json
          company_info?: Json | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          organization_id?: string | null
          original_pdf_url?: string | null
          pdf_url?: string | null
          pricing?: Json | null
          project_details?: Json | null
          proposal_number?: string | null
          sections?: Json
          sent_at?: string | null
          signatures?: Json | null
          signed_at?: string | null
          status?: string | null
          template_id?: string | null
          title: string
          updated_at?: string | null
          user_id?: string | null
          viewed_at?: string | null
        }
        Update: {
          access_token?: string | null
          branding?: Json | null
          client_info?: Json
          company_info?: Json | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          organization_id?: string | null
          original_pdf_url?: string | null
          pdf_url?: string | null
          pricing?: Json | null
          project_details?: Json | null
          proposal_number?: string | null
          sections?: Json
          sent_at?: string | null
          signatures?: Json | null
          signed_at?: string | null
          status?: string | null
          template_id?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposals_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposals_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "proposal_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      roof_visualizations: {
        Row: {
          created_at: string | null
          created_by: string | null
          customer_access_token: string | null
          customer_feedback: Json | null
          customer_id: string | null
          estimated_cost: number | null
          id: string
          material_quantities: Json | null
          organization_id: string
          original_image_url: string
          processing_notes: string | null
          project_id: string | null
          provider_job_id: string | null
          roof_measurements: Json | null
          roof_segments: Json | null
          selected_materials: Json
          status: string | null
          updated_at: string | null
          viewed_by_customer_at: string | null
          visualized_image_url: string | null
          visualizer_provider: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          customer_access_token?: string | null
          customer_feedback?: Json | null
          customer_id?: string | null
          estimated_cost?: number | null
          id?: string
          material_quantities?: Json | null
          organization_id: string
          original_image_url: string
          processing_notes?: string | null
          project_id?: string | null
          provider_job_id?: string | null
          roof_measurements?: Json | null
          roof_segments?: Json | null
          selected_materials: Json
          status?: string | null
          updated_at?: string | null
          viewed_by_customer_at?: string | null
          visualized_image_url?: string | null
          visualizer_provider: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          customer_access_token?: string | null
          customer_feedback?: Json | null
          customer_id?: string | null
          estimated_cost?: number | null
          id?: string
          material_quantities?: Json | null
          organization_id?: string
          original_image_url?: string
          processing_notes?: string | null
          project_id?: string | null
          provider_job_id?: string | null
          roof_measurements?: Json | null
          roof_segments?: Json | null
          selected_materials?: Json
          status?: string | null
          updated_at?: string | null
          viewed_by_customer_at?: string | null
          visualized_image_url?: string | null
          visualizer_provider?: string
        }
        Relationships: [
          {
            foreignKeyName: "roof_visualizations_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      shingle_materials: {
        Row: {
          color_code: string | null
          color_name: string
          created_at: string | null
          id: string
          is_active: boolean | null
          manufacturer: string
          material_type: string | null
          organization_id: string
          price_per_square: number | null
          product_line: string
          product_name: string
          texture_url: string | null
          updated_at: string | null
          warranty_years: number | null
        }
        Insert: {
          color_code?: string | null
          color_name: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          manufacturer: string
          material_type?: string | null
          organization_id: string
          price_per_square?: number | null
          product_line: string
          product_name: string
          texture_url?: string | null
          updated_at?: string | null
          warranty_years?: number | null
        }
        Update: {
          color_code?: string | null
          color_name?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          manufacturer?: string
          material_type?: string | null
          organization_id?: string
          price_per_square?: number | null
          product_line?: string
          product_name?: string
          texture_url?: string | null
          updated_at?: string | null
          warranty_years?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shingle_materials_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_catalogs: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          inventory: number | null
          last_synced_at: string | null
          name: string
          price: number | null
          sku: string
          supplier_id: string | null
          unit: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          inventory?: number | null
          last_synced_at?: string | null
          name: string
          price?: number | null
          sku: string
          supplier_id?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          inventory?: number | null
          last_synced_at?: string | null
          name?: string
          price?: number | null
          sku?: string
          supplier_id?: string | null
          unit?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_catalogs_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          api_endpoint: string | null
          api_key: string | null
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          api_endpoint?: string | null
          api_key?: string | null
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          api_endpoint?: string | null
          api_key?: string | null
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_calendar_tokens: {
        Row: {
          access_token: string
          created_at: string | null
          expires_at: string | null
          id: string
          provider: string
          refresh_token: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          access_token: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          provider: string
          refresh_token?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          access_token?: string
          created_at?: string | null
          expires_at?: string | null
          id?: string
          provider?: string
          refresh_token?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      visualization_comparisons: {
        Row: {
          created_at: string | null
          created_by: string | null
          customer_id: string
          id: string
          name: string
          notes: string | null
          organization_id: string
          visualization_ids: string[]
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          customer_id: string
          id?: string
          name: string
          notes?: string | null
          organization_id: string
          visualization_ids: string[]
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          customer_id?: string
          id?: string
          name?: string
          notes?: string | null
          organization_id?: string
          visualization_ids?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "visualization_comparisons_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      warranties: {
        Row: {
          coverage_details: Json | null
          created_at: string | null
          customer_id: string | null
          id: string
          is_active: boolean | null
          notes: string | null
          organization_id: string | null
          product_name_sku: string | null
          project_id: string | null
          provider_name: string
          updated_at: string | null
          warranty_document_url: string | null
          warranty_duration_unit: string
          warranty_duration_value: number
          warranty_expiration_date: string | null
          warranty_start_date: string
          warranty_type: string
        }
        Insert: {
          coverage_details?: Json | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          is_active?: boolean | null
          notes?: string | null
          organization_id?: string | null
          product_name_sku?: string | null
          project_id?: string | null
          provider_name: string
          updated_at?: string | null
          warranty_document_url?: string | null
          warranty_duration_unit: string
          warranty_duration_value: number
          warranty_expiration_date?: string | null
          warranty_start_date: string
          warranty_type: string
        }
        Update: {
          coverage_details?: Json | null
          created_at?: string | null
          customer_id?: string | null
          id?: string
          is_active?: boolean | null
          notes?: string | null
          organization_id?: string | null
          product_name_sku?: string | null
          project_id?: string | null
          provider_name?: string
          updated_at?: string | null
          warranty_document_url?: string | null
          warranty_duration_unit?: string
          warranty_duration_value?: number
          warranty_expiration_date?: string | null
          warranty_start_date?: string
          warranty_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "warranties_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      warranty_reminders: {
        Row: {
          created_at: string | null
          id: string
          message_template: string | null
          method: string
          organization_id: string | null
          reminder_type: string
          scheduled_date: string
          sent_at: string | null
          status: string | null
          warranty_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message_template?: string | null
          method: string
          organization_id?: string | null
          reminder_type: string
          scheduled_date: string
          sent_at?: string | null
          status?: string | null
          warranty_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message_template?: string | null
          method?: string
          organization_id?: string | null
          reminder_type?: string
          scheduled_date?: string
          sent_at?: string | null
          status?: string | null
          warranty_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "warranty_reminders_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "warranty_reminders_warranty_id_fkey"
            columns: ["warranty_id"]
            isOneToOne: false
            referencedRelation: "warranties"
            referencedColumns: ["id"]
          },
        ]
      }
      weather_api_settings: {
        Row: {
          api_key: string
          created_at: string | null
          id: string
          is_active: boolean | null
          organization_id: string | null
          provider: string | null
          trigger_settings: Json | null
          updated_at: string | null
        }
        Insert: {
          api_key: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          organization_id?: string | null
          provider?: string | null
          trigger_settings?: Json | null
          updated_at?: string | null
        }
        Update: {
          api_key?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          organization_id?: string | null
          provider?: string | null
          trigger_settings?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "weather_api_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      weather_customer_alerts: {
        Row: {
          created_at: string | null
          customer_id: string | null
          customer_location_id: string | null
          distance_miles: number | null
          id: string
          notes: string | null
          organization_id: string | null
          outreach_method: string | null
          outreach_sent_at: string | null
          priority_score: number | null
          status: string | null
          updated_at: string | null
          weather_event_id: string | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          customer_location_id?: string | null
          distance_miles?: number | null
          id?: string
          notes?: string | null
          organization_id?: string | null
          outreach_method?: string | null
          outreach_sent_at?: string | null
          priority_score?: number | null
          status?: string | null
          updated_at?: string | null
          weather_event_id?: string | null
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          customer_location_id?: string | null
          distance_miles?: number | null
          id?: string
          notes?: string | null
          organization_id?: string | null
          outreach_method?: string | null
          outreach_sent_at?: string | null
          priority_score?: number | null
          status?: string | null
          updated_at?: string | null
          weather_event_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "weather_customer_alerts_customer_location_id_fkey"
            columns: ["customer_location_id"]
            isOneToOne: false
            referencedRelation: "customer_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weather_customer_alerts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weather_customer_alerts_weather_event_id_fkey"
            columns: ["weather_event_id"]
            isOneToOne: false
            referencedRelation: "weather_events"
            referencedColumns: ["id"]
          },
        ]
      }
      weather_events: {
        Row: {
          affected_area: Json
          created_at: string | null
          details: Json | null
          end_time: string | null
          event_id: string | null
          event_type: string
          id: string
          organization_id: string | null
          severity: string
          source_api: string
          start_time: string
        }
        Insert: {
          affected_area: Json
          created_at?: string | null
          details?: Json | null
          end_time?: string | null
          event_id?: string | null
          event_type: string
          id?: string
          organization_id?: string | null
          severity: string
          source_api: string
          start_time: string
        }
        Update: {
          affected_area?: Json
          created_at?: string | null
          details?: Json | null
          end_time?: string | null
          event_id?: string | null
          event_type?: string
          id?: string
          organization_id?: string | null
          severity?: string
          source_api?: string
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "weather_events_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      weather_service_areas: {
        Row: {
          area_data: Json
          area_type: string
          created_at: string | null
          id: string
          is_active: boolean | null
          name: string
          organization_id: string | null
          updated_at: string | null
        }
        Insert: {
          area_data: Json
          area_type: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          organization_id?: string | null
          updated_at?: string | null
        }
        Update: {
          area_data?: Json
          area_type?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          organization_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "weather_service_areas_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      work_scope_templates: {
        Row: {
          category: string
          created_at: string | null
          description: string
          id: string
          is_default: boolean | null
          order_index: number | null
          organization_id: string | null
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description: string
          id?: string
          is_default?: boolean | null
          order_index?: number | null
          organization_id?: string | null
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string
          id?: string
          is_default?: boolean | null
          order_index?: number | null
          organization_id?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "work_scope_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_default_roof_materials: {
        Args: { org_id: string }
        Returns: undefined
      }
      check_overdue_invoices: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      generate_proposal_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_lead_sources_count: {
        Args: { filter_start_date: string; filter_end_date: string }
        Returns: {
          source: string
          count: number
        }[]
      }
      get_project_types_count: {
        Args: { filter_start_date: string; filter_end_date: string }
        Returns: {
          type: string
          count: number
        }[]
      }
      get_visualization_by_token: {
        Args: { access_token: string }
        Returns: {
          id: string
          original_image_url: string
          visualized_image_url: string
          selected_materials: Json
          status: string
          created_at: string
        }[]
      }
      handle_photo_upload: {
        Args: {
          p_organization_id: string
          p_entity_type: string
          p_entity_id: string
          p_url: string
          p_name: string
          p_size: number
          p_type: string
        }
        Returns: {
          created_at: string | null
          created_by: string | null
          entity_id: string
          entity_type: string
          id: string
          name: string | null
          organization_id: string | null
          size: number | null
          type: string | null
          url: string
        }
      }
      update_customer_feedback: {
        Args: { access_token: string; feedback_data: Json }
        Returns: boolean
      }
    }
    Enums: {
      campaign_status: "draft" | "scheduled" | "sending" | "sent" | "failed"
      recipient_status:
        | "pending"
        | "sent"
        | "failed"
        | "opened"
        | "clicked"
        | "unsubscribed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      campaign_status: ["draft", "scheduled", "sending", "sent", "failed"],
      recipient_status: [
        "pending",
        "sent",
        "failed",
        "opened",
        "clicked",
        "unsubscribed",
      ],
    },
  },
} as const
